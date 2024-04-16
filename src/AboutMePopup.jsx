

export function AboutMePopup({setIsClicked}) {

    const popUp = () => {
        setIsClicked(prevState => !prevState);
    }

    return (
        <section class="popUp-container">
            <article class="popUp-info">
                <p>¡Hola! <br />
                    Soy Ignacio Deter, un entusiasta del diseño web con una pasión por la innovación y la tecnología. Tengo una amplia experiencia en la gestión de proyectos de desarrollo de sitios web de alta calidad y en trabajar con equipos diversos. Estoy comprometido en mejorar mis habilidades técnicas y creativas, mantenerme al tanto de las nuevas tendencias, y buscar nuevas oportunidades. <br /><br />Actualmente, estoy estudiando Ingeniería Informática, y siempre estoy abierto a contribuir con mis habilidades a proyectos que impulsen la excelencia y el cambio en la industria tecnológica. <br /><br />
                </p>
                <div>
                    <button onClick={popUp} className="button-popup"> Cerrar </button>
                </div>
            </article>
        </section>


    )

}