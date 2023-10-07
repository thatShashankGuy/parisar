import './ProfilePicture.css'

interface ProfilePictureProps {
  src: string;
  alt: string; 
}

export default function  ProfilePicture( props : ProfilePictureProps) {
  return (
    <div className="profile-picture">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

