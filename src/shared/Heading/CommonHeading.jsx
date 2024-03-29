const CommonHeading = ({ heading, paragraph }) => {
  return (
    <div className="mx-auto px-3 md:px-0 text-center md:w-3/5 space-y-4">
      <h2 className="text-3xl md:text-6xl  font-greatVibes font-semibold text-blue-600">
        {heading}
      </h2>
      <p className="text-md">{paragraph}</p>
    </div>
  );
};

export default CommonHeading;
