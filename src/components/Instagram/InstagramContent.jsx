import React, { useState, useEffect } from 'react'
import InstagramPost from './InstagramPost'

const InstagramFeed = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visiblePosts, setVisiblePosts] = useState(6)

  useEffect(() => {
    const feedUrl = 'https://feeds.behold.so/6hDfbto56mymINq96KY9'

    fetch(feedUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setData({ username: '', profilePictureUrl: '', posts: data })
        } else if (data && Array.isArray(data.posts)) {
          setData(data)
        } else {
          throw new Error('Unexpected data structure')
        }
      })
      .catch(error => {
        console.error('Error fetching Instagram feed:', error)
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const loadMore = () => {
    setVisiblePosts((prevVisible) => Math.min(prevVisible + 6, data?.posts.length || 0))
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>
  }

  if (!data) {
    return <div className="text-center py-10">No data available</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <a href={`https://instagram.com/${data.username}`} rel="noreferrer" target='_blank'  className="flex items-center mb-6">
        <img src={data.profilePictureUrl} alt={data.username} className="w-16 h-16 rounded-full mr-4" />
        <h2 className="text-2xl font-bold">@{data.username}</h2>
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
        {data.posts.slice(0, visiblePosts).map((post) => (
          <InstagramPost key={post.id} post={post} />
        ))}
      </div>
      {visiblePosts < data.posts.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default InstagramFeed