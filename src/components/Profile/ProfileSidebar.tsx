import Image from "next/image";
import ProfileImage from "@/assets/images/Ellipse 147.png";

const ProfileSidebar = ({ selectedItem, onSelectItem }: any) => {
  const menuItems = [
    { name: "Your Profile" },
    { name: "Applied Colleges" },
    { name: "Your Reviews" },
    { name: "Pending Applications" },
    { name: "Account settings" },
    { name: "Logout" },
  ];

  return (
    <aside className="bg-white p-4 rounded-lg shadow w-full">
      <div className="lg:flex hidden items-center mb-4">
        <Image
          src={ProfileImage}
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-semibold">Madhur Rastogi</h2>
          <p className="lg:text-sm text-xs text-gray-600">
            madhurrastogi04@gmail.com
          </p>
        </div>
      </div>
      <nav className="">
        <ul className="space-y-2 flex lg:flex-col flex-row w-full bg-white overflow-x-auto lg:items-stretch items-center hide-scrollbar">
          {menuItems.map((item) => (
            <li key={item.name} className="cursor-pointer">
              <div className="w-full">
                <span
                  className={`block min-w-max  py-2 px-4 rounded ${
                    selectedItem === item.name
                      ? "bg-blue-400 text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => onSelectItem(item.name)}
                >
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
