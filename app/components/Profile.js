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
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}
