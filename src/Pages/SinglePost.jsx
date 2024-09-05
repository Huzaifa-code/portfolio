import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub,AiOutlineTwitter} from 'react-icons/ai'
import { BsMedium } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { LuCopy } from "react-icons/lu";
import { motion, useScroll } from "framer-motion"
import { Helmet } from 'react-helmet';
import { NavBarBlog, Comments,ClapButton, YouTubeEmbed } from '../components/Blog'


const CodeBlock = ({ node }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(node.code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000); // Reset copied state after 3 seconds
  };

  return (
    <div className="code-block-wrapper">
      <p className='text-sm text-indigo-600' >{isCopied ? 'copied' : "" } &nbsp; </p>
      <pre className="code-block flex justify-between items-start mb-11">
        <code className='text-sm' >{node.code}</code>
        <button
          onClick={handleCopyToClipboard}
          className=" text-white font-semibold px-4 py-2 text-xs flex justify-center items-center gap-2"
        >
          <LuCopy />
        </button>
      </pre>
    </div>
  );
};



const SinglePost = () => {

  const [SinglePost, setSinglePost]  = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const { slug } = useParams();


  const { scrollYProgress } = useScroll();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [isShortening, setIsShortening] = useState(false);
  const [error, setError] = useState('');
  const [isUrlCopied, setIsUrlCopied] = useState(false);

  useEffect(() => {
    client.fetch(
      `
        *[slug.current == "${slug}"] {
          title,
          claps,
          body,
          mainImage {
            asset -> {
              _id,
              url,
            },
            alt
          }
        }
      `
    ).then((data) => {
      setSinglePost(data[0])
    })
    setIsLoading(false);
  }, [slug])


  async function createShortUrl(longUrl) {
    try {
      setIsShortening(true);
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/url`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: longUrl })
      });
      const data = await response.json();
      setShortUrl(data.shortUrl);
      setIsShortening(false);
    } catch (error) {
      setError('Failed to shorten URL');
      setIsShortening(false);
    }
    
  }

  const currentUrl = window.location.href;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsUrlCopied(true);
    setTimeout(() => {
      setIsUrlCopied(false);
    }, 3000); // 3 seconds
  };


  // For code Block
  const serializers = {
    types: {
      code: CodeBlock,
      youtube: ({ node }) => <YouTubeEmbed url={node.url} />,
    },
  };

  return (
    <div className='bg-white'>
      <Helmet>
        <title>{SinglePost.title}</title>
        <meta name="description" content={ SinglePost.title + ",web development , Coding, Programming"} />
        <meta name="keywords" content="#webdevelopment, #coding, #programming, #react, #node, #mern, #development, #javascript" />
        {/* Add more meta tags as needed */}
      </Helmet>


      <NavBarBlog/>
      <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#731FFC] origin-top-left' style={{ scaleX: scrollYProgress }} />  
      {isLoading ? (
          
            <h1 className='uppercase font-bold text-4xl tracking-wide nb-5 md:text-6xl flex items-center justify-center h-screen'>Loading...</h1> 
          
        ): 
        <section className='px-5 xl:max-w-5xl xl:mx-auto pb-10'>
          
          <motion.div 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5, delay: 0.1}}
          >
            <h1 
              style={{
                fontFamily: "'Sriracha', cursive"
              }} 
              className="text-4xl md:text-6xl pt-5 mb-10 text-center " 
            >
              {SinglePost.title}
            </h1>
          </motion.div>
          
          
          {SinglePost && SinglePost.mainImage && SinglePost.mainImage.asset && (
            <>
             <motion.div 
              style={{ x: -200 }} animate={{ x: 0 }}
              transition={{duration: 0.6}}
              >
              <img className='blog_image rounded-lg mx-auto' src={SinglePost.mainImage.asset.url} alt={SinglePost.title} title={SinglePost.title} />
             </motion.div>

              <div className='flex justify-between items-center'>
                <ClapButton initialClaps={SinglePost.claps} slug={slug}  />
                <p className='text-right my-9'>Huzaifa Qureshi</p>
              </div>
            </>
          )} 
          
          

          <div className='block_content'>
            <BlockContent className='text-xl' blocks={SinglePost.body} projectId="os5ae1ct" dataset="production" serializers={serializers} />
          </div>

          
          <button onClick={() => setIsModalOpen(true)} 
            className='py-2 px-6 mx-auto md:my-11 rounded-md shadow text-white bg-[#731FFC] hover:bg-[#31185a] transition-all duration-500 font-bold flex justify-center items-center gap-3'
          >
            <LiaTelegram className='text-xl'/>
            <p>Share</p>
          </button>


          <div className='flex flex-col justify-center items-center md:my-11'>
            <h3 className='my-4 text-lg font-semibold text-zinc-700'>Follow me on</h3>
            <div className='flex justify-center items-center gap-6'>
              <a  target="_blank"  rel="noreferrer" href="https://www.instagram.com/developer_huzaifa" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125 transition-all"> <AiFillInstagram/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125 transition-all"> <AiFillLinkedin/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://github.com/Huzaifa-code" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125 transition-all"> <AiFillGithub/> </a>
              <a  target="_blank"  rel="noreferrer" href="https://twitter.com/Huzaifa92912561" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125 transition-all"> <AiOutlineTwitter/> </a> 
              <a  target="_blank"  rel="noreferrer" href="https://medium.com/@huzaifaqureshi037" className="text-5xl relative md:hover:bottom-2 md:hover:scale-125 transition-all"> <BsMedium/> </a> 
            </div>
          </div>

          <Comments postSlug={slug}/>

          <button className='mt-10 mb-10 block mx-auto'>
            <Link to='/blog' className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>Read More Articles</Link>
          </button>
          
          <div className='opacity-0'>
            <p>#webdevelopment #coding #programming #react #node #mern #development #javascript </p>
          </div>

          

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm">
              <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative bg-white rounded-lg mx-auto max-w-md p-8">
                  <div className="text-right">
                    <button onClick={() => setIsModalOpen(false)}>&times;</button>
                  </div>
                  <h2 className="text-lg font-semibold mb-4">Share this post</h2>
                  <input type="text" value={currentUrl} readOnly className="w-full mb-4 border-gray-300 rounded-lg p-2" />
                  <button
                    onClick={() => createShortUrl(currentUrl)}
                    className="bg-[#731FFC] hover:bg-[#31185a] text-white font-semibold px-4 py-2 rounded-lg w-full"
                    disabled={isShortening}
                  >
                    {isShortening ? 'Shortening...' : 'Shorten URL'}
                  </button>
                  {shortUrl && (
                    <>
                      <h1 className='text-md font-semibold mt-4'>Shortened url :</h1>
                      <input type="text" value={shortUrl} readOnly className="w-full my-2 border-gray-300 rounded-lg p-2 bg-gray-100" />
                      <button
                        onClick={handleCopyToClipboard}
                        className="bg-neutral-500 hover:bg-neutral-400 text-white font-semibold px-4 py-2 rounded-lg text-xs my-3 flex justify-center items-center gap-2"
                      > 
                        <LuCopy/>
                        <p>Copy URL </p>
                      </button>
                      {isUrlCopied && <p className="text-blue-500 text-xs font-medium text-center">URL Copied!</p>}
                    </>
                  )}
                  
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
              </div>
            </div>
          )}
          {/* End Modal */}

        </section>

      }
    </div>
  )
}

export default SinglePost