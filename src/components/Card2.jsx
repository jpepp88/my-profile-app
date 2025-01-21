import img from '../assets/profile1.jpeg';

const Card2 = () => {
    const name = 'Jane Doe';
    const title = 'Product Designer';
    const email = 'b@b.com';

    return (
        <div className="profile-card">
            <div className="profile-card_img">
                <img src={img} alt="profile" width={200}/>
            </div>
            <div className="profile-card_content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={'mailto:${email}'}>{email}</a></p>
            </div>
        </div>
    );
}

export default Card2;