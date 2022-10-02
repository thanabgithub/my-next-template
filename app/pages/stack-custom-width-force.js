export default function Home() {
  return (
    <>
      <div className="[ main ] [ page-wrapper ]">
        <div className="[ main__a-card ] [ box--padding--1em box--border-radius--1em box--bg-primary-400 box--shadow-elevation-high box--right ]">
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
        <div className="[ main__b-card ] [ box--padding--1em box--bg-neutral-400 box--shadow-elevation-high box--left text--right ]">
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
        <div className="[ main__c-card ] [ box--border--left box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]">
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
        <div className="[ main__c-card ] [ box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]">
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
          className="[ main__c-card ] [ box--padding--1em box--bg-neutral-400 box--shadow-elevation-high ]"
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
        @use "../styles/abstracts";

        @media (min-width: abstracts.$breakpoint--m-size) {
          .page-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          .main__a-card {
            width: min(50%, abstracts.$readable-width);
          }
          .main__b-card {
            width: min(30%, 3 / 5 * abstracts.$readable-width);
          }
        }

        .main__c-card {
        }

        .main__c-card[data-type="exception"] {
          color: abstracts.$color-primary-400;
        }
      `}</style>
    </>
  );
}
