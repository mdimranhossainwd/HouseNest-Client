const CommonHeading = ({ heading, paragraph }) => {
  return (
    <div className="mx-auto text-center w-3/5 space-y-4">
      <h2 className="text-4xl  font-semibold text-blue-600">{heading}</h2>
      <p className="text-md">{paragraph}</p>
    </div>
  );
};

export default CommonHeading;
