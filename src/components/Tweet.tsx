interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

const tweetStyles = {
  borderRadius: 8
}

export function Tweet({user, children, likes}: TweetProps){
  return (
    <div className="tweet" style={tweetStyles}>
      <strong>{user}</strong>
      <p>{children}</p>

      <button>Like {likes ?? 0}</button>
    </div>
  )
}