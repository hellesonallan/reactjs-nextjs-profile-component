import Image from "next/image";

export function Profile() {
  return (
    <div>
      <img
        src="https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"
        alt="foto de perfil"
        width={128}
        height={128}
      />
      <h1>Lorem Ipsum</h1>
      <p>Lorem Ipsum.</p>
    </div>
  );
}
