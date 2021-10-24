import React, { useRef, useEffect, useState} from 'react'
import './App.css'

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
                setVisible(entry.isIntersecting);
            });
        });

        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
            >
            {props.children}
        </div>
    );
}

function App() {
    const [isShown, setIsShown] = React.useState(true);

    return (
        <div className='App'>
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? "Unmount" : "Mount"} fade in section
            </button>
            <h1>Fade in demo</h1>

            {isShown && (
            <>
            <FadeInSection>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
                    commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
                    rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
                    at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
                    porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
                    Cras quis orci ac risus dapibus pellentesque faucibus in leo.
                    Vivamus gravida eros a leo luctus, mollis elementum lectus
                    viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
                    at mauris aliquam, quis luctus est posuere. Quisque erat neque,
                    sollicitudin quis mi et, commodo ultrices magna. Etiam varius
                    efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
                    Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
                    magna eget purus gravida, et ultricies ex consequat.
                </p>
            </FadeInSection>
            <FadeInSection>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
                    commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
                    rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
                    at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
                    porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
                    Cras quis orci ac risus dapibus pellentesque faucibus in leo.
                    Vivamus gravida eros a leo luctus, mollis elementum lectus
                    viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
                    at mauris aliquam, quis luctus est posuere. Quisque erat neque,
                    sollicitudin quis mi et, commodo ultrices magna. Etiam varius
                    efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
                    Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
                    magna eget purus gravida, et ultricies ex consequat.
                </p>
            </FadeInSection>
            <FadeInSection>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
                    commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
                    rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
                    at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
                    porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
                    Cras quis orci ac risus dapibus pellentesque faucibus in leo.
                    Vivamus gravida eros a leo luctus, mollis elementum lectus
                    viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
                    at mauris aliquam, quis luctus est posuere. Quisque erat neque,
                    sollicitudin quis mi et, commodo ultrices magna. Etiam varius
                    efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
                    Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
                    magna eget purus gravida, et ultricies ex consequat.
                </p>
            </FadeInSection>
            <FadeInSection>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
                    commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac
                    rutrum lorem rutrum eget. Donec libero lorem, luctus in maximus
                    at, facilisis sit amet sapien. Pellentesque pharetra non urna ac
                    porttitor. Phasellus a dignissim augue, rhoncus sagittis ante.
                    Cras quis orci ac risus dapibus pellentesque faucibus in leo.
                    Vivamus gravida eros a leo luctus, mollis elementum lectus
                    viverra. Vivamus pellentesque pulvinar turpis. Cras rutrum justo
                    at mauris aliquam, quis luctus est posuere. Quisque erat neque,
                    sollicitudin quis mi et, commodo ultrices magna. Etiam varius
                    efficitur elementum. Nam et lacus sit amet mi viverra lacinia.
                    Nullam pretium est vitae tortor mollis tempor. Cras tincidunt
                    magna eget purus gravida, et ultricies ex consequat.
                </p>
            </FadeInSection>
        </>
    )}
    </div>
  
  );
}

export default App