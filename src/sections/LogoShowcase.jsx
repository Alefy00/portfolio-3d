import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      {icon.imgPath ? (
        <img
          src={icon.imgPath}
          alt={icon.name}
          className="max-h-16 max-w-full object-contain"
        />
      ) : (
        <span className="rounded-lg border border-white/15 bg-black-100 px-5 py-3 text-xl font-semibold tracking-tight text-white-50">
          {icon.name}
        </span>
      )}
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
