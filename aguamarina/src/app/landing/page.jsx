import React from 'react'
import LayoutLanding from "@/app/landing/LayoutLanding"
import { Container, Row, Col } from "reactstrap"

function HomePage() {
  return (
    <LayoutLanding>
      <section className="section section-lg">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h1 className="display-3 text-white">Bienvenidos a AguaMarina</h1>
              <p className="lead text-white">
                En Agua Marina, transformamos tus eventos en experiencias inolvidables con nuestro servicio de alquiler de mobiliario. Ya sea que estés planeando una boda elegante, una fiesta íntima o un evento corporativo, contamos con una amplia gama de opciones de mobiliario que se adaptan a tus necesidades y estilo.
              </p>
              <p className="lead text-white">
                Desde sillas y mesas sofisticadas hasta elementos decorativos que marcan la diferencia, nuestro equipo está comprometido en ofrecerte calidad y un servicio excepcional. Explora nuestras colecciones y descubre cómo podemos ayudarte a hacer realidad la visión de tu evento perfecto. ¡Déjanos ser parte de tu celebración!
              </p>
            </Col>
          </Row>
        </Container>

        <section className="section section-lg bg-gradient-default">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2 className="display-4 text-white">Nuestra Misión</h2>
                <p className="lead text-white">
                  En AguaMarina, nuestra misión es proporcionar soluciones de mobiliario excepcionales para eventos, ofreciendo calidad, estilo y comodidad. Nos comprometemos a entender las necesidades de nuestros clientes y a superar sus expectativas con un servicio personalizado y profesional. Buscamos transformar cada ocasión en una celebración memorable a través de un mobiliario elegante y funcional.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg bg-secondary">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2 className="display-4 text-white">Nuestra Visión</h2>
                <p className="lead text-white">
                  En AguaMarina, aspiramos a ser el líder en el alquiler de mobiliario para eventos, reconocido por nuestra innovación, calidad y atención al detalle. Queremos ser la primera opción para clientes que buscan crear eventos únicos y sofisticados, estableciendo un estándar en el sector y contribuyendo a la excelencia en cada celebración.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </LayoutLanding>
  )
}

export default HomePage