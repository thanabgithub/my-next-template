export default function Home() {
  return (
    <>
      <div className="[main][ page-wrapper ] [ flow ]">
        <div className="[ main__a-card ] [ box--margin-inline--1em box--padding--1em box--border-radius--1em box--bg-neutral-400 box--shadow-elevation-high box--right ]">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="[ main__b-card ] [ box--margin-inline--1em box--padding--1em box--bg-neutral-400 box--shadow-elevation-high box--left text--right ]">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="[ main__c-card ] [ box--border--left box--margin-inline--1em box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]">
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="[ main__c-card ] [ box--margin-inline--1em box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          className="[ main__c-card ] [ box--margin-inline--1em box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]"
          data-type="exception"
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <style jsx>{`
        @use "../global-styles/glob-vars.scss";

        @media (min-width: glob-vars.$breakpoint--m-size) {
          .page-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          .main__a-card {
            width: 50%;
          }
          .main__b-card {
            width: 30%;
          }
        }

        .main__c-card {
        }

        .main__c-card[data-type="exception"] {
          color: glob-vars.$color-primary-400;
        }
      `}</style>
    </>
  );
}
