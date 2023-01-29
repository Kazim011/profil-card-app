import "bulma/css/bulma.css";
import ProfilCard from "./ProfilCard";
import AlexsaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personel Dijital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfilCard
                title="Alexsa"
                handle="@alexsa99"
                image={AlexsaImage}
                description="Alexsa amazon tarafında yaratılan bir şeyler almanızı sağlayan bir mağazadır."
              />
            </div>
            <div className="column is-4">
              <ProfilCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft.Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfilCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
