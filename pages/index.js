const backgroundColor = "#eee";

export default function Home() {
  return (
    <>
      <div className="hello utils_box--center-children--stretch">
        <h2 className="card">Hello World</h2>
        <h2 className="card"> scss test</h2>
      </div>
      <div className="hello utils_box--center-children--fit utils_effect--kp-btn">
        <h2 className="card">Hello World</h2>
        <h2 className="card"> scss test</h2>
      </div>
      <style jsx>{`
        .card {
          background-color: var(--glob-vars_color-primary-400);
        }
        .hello {
          background-color: ${backgroundColor};
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
          &:hover {
            color: red;
          }
          @media only screen and (max-width: 480px) {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
