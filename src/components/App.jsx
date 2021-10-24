import React, { useState, useRef, useMemo, useEffect } from "react";
import "./App.css";

const App = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (enteries) => {
    const [entry] = enteries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className='app'>
      <h1>intersection observer api</h1>
      <section className='one'>
        <h1>Section 1</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. t suscipit
          fugiat, ut voluptatem! Dolores velit reiciendis quaerat aliquid
          blanditiitione similique laudantium obcaecati, ex eum maxime, itaque
          perspiciatis facere tenetur sequi. Exercitationem repellat temporibus
          beatae quod, earum enim! Placeat, ex officia hic totam omnis
          aspernatur quas molestias corporis ullam, aut nulla vero vel ratione
          aliquid quaerat tempore, magni labore. Animi optio eius deleniti,
          officiis culpa modi quae expedita architecto cumque pariatur aperiam
          praesentium accusantium enim commodi exercitationem dignissimos
          tenetur neque. Iste veritatis sint totam quasi? Necessitatibus
          distinctio, rem illum suscipit at enim explicabo ea omnis beatae
          veniam nulla voluptas architecto eveniet, quisquam obcaecati ipsum
          nihil. Ratione repquibusdam. Nam accusantium ipsum, suscipit unde
          error non voluptas facilis aliquid deserunt similique velit provident
          omnis temporibus sint excepturi! Dicta quis incidunt hic cum error
          iusto voluptate, delectus fugiat atque, ipsam quaerat! Labore deserunt
          culpa ipsam debitis quo voluptatum cum. Minima commodi suscipit
          consequatur iusto porro excepturi sit quisquam obcaecati, debitis est
          dolores. Maxime tenetur ratione distinctio cupiditate voluptatibus,
          consequatur, exercitationem, enim iusto porro voluptatem iure?
          Adipisci, consequuntur error laboriosam possimus facilis ex. Doloribus
          dolor aspernatur minima incidunt accusamus ratione, quibusdam illo
          necessitatibus nihil sapiente enim, quasi repudiandae a, qui totam sit
          quidem excepturi dolorem consequuntur ut tempora quo? Obcaecati,
          minima excepturi! Amet incidunt sapiente quis minima consectetur
          doloremque maxime voluptas nisi eum odit, dolores saepe facilis
          obcaecati veritatis illo! Perferendis aliquam eos fuga laudantium,
          magnam neque optio quae ipsa quaerat illo, accusantium eligendi sint
          eaque magni architecto sapiente quam dicta mollitia. Culpa esse, vel
          quae commodi
        </p>
      </section>
      <section className='two'>
        <h1>Section 2</h1>
        <p
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={targetRef}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          voluptate nobis odio saepe quaerat sequi dolorum, voluptatum molestias
          deserunt nesciunt ea unde perferendis repudiandae quas tenetur vitae
          adipisci nihil numquam earum. Velit, autem. Quae rerum unde, sequi
          porro modi fuga quaerat aut officiis. Quaerat natus omnis officiis
          quidem unde quia nesciunt molestias aut rem, tempora illo similique,
          voluptas excepturi, repellat magni maxime ea in dicta rerum nulla
          ducimus ad deserunt? Magnam earum ad, ea cupiditate hic incidunt
          suscipit ratione. Impedit commodi repellendus architecto consectetur
          tempore perferendis fuga libero velit quasi, ullam nulla explicabo
          nostrum dolores accusamus hic praesentium soluta adipisci.
        </p>
        <p
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={targetRef}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          voluptate nobis odio saepe quaerat sequi dolorum, voluptatum molestias
          deserunt nesciunt ea unde perferendis repudiandae quas tenetur vitae
          adipisci nihil numquam earum. Velit, autem. Quae rerum unde, sequi
          porro modi fuga quaerat aut officiis. Quaerat natus omnis officiis
          quidem unde quia nesciunt molestias aut rem, tempora illo similique,
          voluptas excepturi, repellat magni maxime ea in dicta rerum nulla
          ducimus ad deserunt? Magnam earum ad, ea cupiditate hic incidunt
          suscipit ratione. Impedit commodi repellendus architecto consectetur
          tempore perferendis fuga libero velit quasi, ullam nulla explicabo
          nostrum dolores accusamus hic praesentium soluta adipisci.
        </p>
        <p
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={targetRef}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          voluptate nobis odio saepe quaerat sequi dolorum, voluptatum molestias
          deserunt nesciunt ea unde perferendis repudiandae quas tenetur vitae
          adipisci nihil numquam earum. Velit, autem. Quae rerum unde, sequi
          porro modi fuga quaerat aut officiis. Quaerat natus omnis officiis
          quidem unde quia nesciunt molestias aut rem, tempora illo similique,
          voluptas excepturi, repellat magni maxime ea in dicta rerum nulla
          ducimus ad deserunt? Magnam earum ad, ea cupiditate hic incidunt
          suscipit ratione. Impedit commodi repellendus architecto consectetur
          tempore perferendis fuga libero velit quasi, ullam nulla explicabo
          nostrum dolores accusamus hic praesentium soluta adipisci.
        </p>
        <p
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={targetRef}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          voluptate nobis odio saepe quaerat sequi dolorum, voluptatum molestias
          deserunt nesciunt ea unde perferendis repudiandae quas tenetur vitae
          adipisci nihil numquam earum. Velit, autem. Quae rerum unde, sequi
          porro modi fuga quaerat aut officiis. Quaerat natus omnis officiis
          quidem unde quia nesciunt molestias aut rem, tempora illo similique,
          voluptas excepturi, repellat magni maxime ea in dicta rerum nulla
          ducimus ad deserunt? Magnam earum ad, ea cupiditate hic incidunt
          suscipit ratione. Impedit commodi repellendus architecto consectetur
          tempore perferendis fuga libero velit quasi, ullam nulla explicabo
          nostrum dolores accusamus hic praesentium soluta adipisci.
        </p>
      </section>
    </div>
  );
};

export default App;
