function _config()
  return {
    name = "Flappy Bunny",
    game_width = 320,
    game_height = 180,
    pause_menu = false
  }
end

local GRAVITY = 800
local JUMP_FORCE = -250
local PIPE_SPEED = 100
local PIPE_WIDTH = 30
local PIPE_GAP = 60
local SPAWN_RATE = 1.5

function _init()
  State = {
    state = "title", -- title, play, gameover
    score = 0,
    timer = 0,
    
    player = {
      x = 50,
      y = 90,
      vy = 0,
      radius = 6
    },
    
    pipes = {}
  }
end

function _update(dt)
  if State.state == "title" then
    if input.pressed(input.BTN1) or input.key_pressed(input.KEY_SPACE) then
      State.state = "play"
      State.score = 0
      State.timer = 0
      State.player.y = 90
      State.player.vy = JUMP_FORCE
      State.pipes = {}
    end
  elseif State.state == "play" then
    -- Player physics
    State.player.vy = State.player.vy + GRAVITY * dt
    State.player.y = State.player.y + State.player.vy * dt
    
    -- Jump
    if input.pressed(input.BTN1) or input.key_pressed(input.KEY_SPACE) then
      State.player.vy = JUMP_FORCE
    end
    
    -- Bounds check
    if State.player.y < 0 or State.player.y > 180 then
      State.state = "gameover"
    end
    
    -- Pipes
    State.timer = State.timer + dt
    if State.timer > SPAWN_RATE then
      State.timer = 0
      local gap_y = 30 + math.random() * 80
      table.insert(State.pipes, { x = 320, gap_y = gap_y, passed = false })
    end
    
    for i = #State.pipes, 1, -1 do
      local p = State.pipes[i]
      p.x = p.x - PIPE_SPEED * dt
      
      -- Score
      if not p.passed and p.x < State.player.x then
        p.passed = true
        State.score = State.score + 1
      end
      
      -- Collision
      local px, py, pr = State.player.x, State.player.y, State.player.radius
      
      -- Check top pipe
      if px + pr > p.x and px - pr < p.x + PIPE_WIDTH then
        if py - pr < p.gap_y or py + pr > p.gap_y + PIPE_GAP then
          State.state = "gameover"
        end
      end
      
      if p.x < -PIPE_WIDTH then
        table.remove(State.pipes, i)
      end
    end
  elseif State.state == "gameover" then
    if input.pressed(input.BTN1) or input.key_pressed(input.KEY_SPACE) then
      _init()
    end
  end
end

function _draw(dt)
  gfx.clear(gfx.COLOR_DARK_BLUE)
  
  -- Draw pipes
  for _, p in ipairs(State.pipes) do
    -- Top pipe
    gfx.rect_fill(p.x, 0, PIPE_WIDTH, p.gap_y, gfx.COLOR_GREEN)
    -- Bottom pipe
    gfx.rect_fill(p.x, p.gap_y + PIPE_GAP, PIPE_WIDTH, 180 - (p.gap_y + PIPE_GAP), gfx.COLOR_GREEN)
  end
  
  -- Draw player
  gfx.circ_fill(State.player.x, State.player.y, State.player.radius, gfx.COLOR_YELLOW)
  
  -- UI
  if State.state == "title" then
    gfx.text_ex("FLAPPY BUNNY", 110, 60, 2, 0, gfx.COLOR_WHITE, 1)
    gfx.text("Press SPACE to Start", 100, 100, gfx.COLOR_LIGHT_GRAY)
  elseif State.state == "play" then
    gfx.text_ex(tostring(State.score), 150, 20, 3, 0, gfx.COLOR_WHITE, 1)
  elseif State.state == "gameover" then
    gfx.text_ex("GAME OVER", 120, 60, 2, 0, gfx.COLOR_RED, 1)
    gfx.text("Score: " .. State.score, 135, 90, gfx.COLOR_WHITE)
    gfx.text("Press SPACE to Restart", 95, 120, gfx.COLOR_LIGHT_GRAY)
  end
end
