interface SocialProps {
  platform: string;
  username: string;
}

export default function Social({ platform, username }: SocialProps) {
  return (
    <a
      href={`https://www.${platform}.com/${username}`}
      className="sticky top-4 rounded-[10px] border border-brand-primary p-2 capitalize text-brand-dark no-underline"
    >
      {platform}
    </a>
  );
}
