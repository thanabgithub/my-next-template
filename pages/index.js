const backgroundColor = "#eee";

export default function Home() {
  return (
    <div className="hello">
      <h2 class="utils_text--left">Hello World</h2>
      <h2 className="hello__element"> scss test</h2>
      <style jsx>{`
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
    </div>
  );
}
