const Icon = ({ name, className }) => {
  if (!name) {
    return null;
  }

  return (
    <svg className={`icon ${className}`} fill="currentColor">
      <use xlinkHref={`/icons/${name}.svg#${name}`} />
    </svg>
  );
};

export default Icon;
