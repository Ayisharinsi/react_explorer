import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <div className="h1">
          <h1>Explorer</h1>
        </div>
        <div className="navigation-links">
          <ul>
            <li>Hotels</li>
            <li>Bike Rentals</li>
            <li>Restaurant</li>
          </ul>
        </div>
      </div>
      <div className="home-container">
        <div className="page-text">
          <h3>WELCOME TO EXPLORER</h3>
          <h1>Your Adventure Travel Expert in the <b>SOUTH</b></h1>
          <div className="page-buttons">
            <select>
              <option value="Choose">Choose</option>
              <option value="Kerala">Kerala</option>
              <option value="Banglore">Banglore</option>
            </select>
            <button>EXPLORE</button>
          </div>
        </div>

        <div className="home-picture">
          <img src="Images/Bikeride-pic.jpg" alt="Bike rider" />
        </div>
      </div>
      <div className="destination">
        <div className="title">
          <h2>Destinations</h2>
          <h3>Just for you. Because you and your bike are special to us!</h3>
        </div>
        <div className="image-container">
          <div className="images">
            <img src="Images/home.jpg" alt="Home" />
              <h2>Never Ending paddy Fields nd Narrow Roads</h2>
              <h3>Pollachi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa vel possimus incidunt nemo quas
                optio repellat rem, dolores ratione aliquam, tempore maxime. Nesciunt quod, inventore neque delectus
                asperiores quas odio distinctio aperiam soluta eius nemo dolorum nulla, mollitia autem consequuntur
                ipsa vel iure? Quo ad aperiam ab quaerat, cupiditate, necessitatibus commodi neque beatae,
                doloremque repellendus enim praesentium? Nisi optio nemo omnis veritatis repellat voluptas sint.
                Doloremque ut vitae dolore nemo quis soluta, consectetur ratione quibusdam earum perspiciatis
                pariatur libero totam dolores hic culpa, eos optio impedit veniam ullam quaerat dignissimos. Illo,
                id minima quia modi facilis veritatis aperiam iusto.</p>
              <button>READ MORE</button>
          </div>
          <div className="images">
            <img src="Images/road-bikes.jpg" alt="Bikes" />
              <h2>Small Ride across town in mid Summer heat</h2>
              <h3>Thanjavaur</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod corrupti tempora nihil eligendi!
                Provident alias aperiam hic nesciunt at labore libero iusto quisquam sint magni sunt temporibus
                facere, deleniti sequi vitae voluptatum nemo deserunt ducimus quis nihil optio, commodi
                exercitationem! Aliquam, aliquid odio! Minus at animi odit, voluptatibus eius cumque totam, eos
                adipisci praesentium consequatur nemo laborum voluptatum quis provident incidunt sapiente vitae unde
                et error. Nam explicabo expedita ipsa mollitia obcaecati? Omnis molestias ducimus, aliquam fugiat
                reiciendis eligendi provident commodi nam, itaque corrupti libero harum voluptatum in molestiae
                cupiditate nostrum cumque, labore non vero enim possimus. Odio, error natus.</p>
              <button>READ MORE</button>
          </div>
          <div className="images">
            <img src="Images/lotuspont.jpg" alt="Lotusspot" />
              <h2>Catching a Short Break at the Lotus pond</h2>
              <h3>Chidambaram</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non, molestias sint quos asperiores
                aspernatur laudantium maxime sed esse voluptatum nemo aut deserunt delectus eos ea enim a harum,
                obcaecati qui perferendis quia repellat. Rem debitis ipsam tempora, eum omnis vitae inventore quidem
                blanditiis nam minus! Tenetur maiores et molestias possimus numquam facere a, quibusdam ipsam eos
                fuga soluta eum rerum! Nihil voluptate, a accusantium commodi suscipit possimus dignissimos hic
                dicta magnam, at, debitis voluptatum facilis quaerat omnis doloribus distinctio sit ut? Temporibus
                officiis accusamus doloribus qui eaque obcaecati laborum accusantium facere, eos possimus veritatis.
                Sint laborum facere nulla quas.</p>
              <button>READ MORE</button>
          </div>
          <div className="images">
            <img src="Images/nature.jpg" alt="nature" />
              <h2>Road Trips Enroute the mountain and forests</h2>
              <h3>Masinagudi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae nihil velit
                exercitationem sed, ducimus nulla! Quas placeat facere nam non dolorem perspiciatis veritatis saepe,
                iure minima recusandae sequi voluptatem doloremque esse consequuntur, itaque repudiandae amet
                laudantium, provident ex explicabo deserunt assumenda dolores molestias minus. Aliquam quaerat
                provident laboriosam quidem est, assumenda sequi, consectetur ut harum atque, pariatur molestias.
                Sit neque voluptas laudantium, facilis numquam aspernatur tenetur doloremque maxime molestiae, sint
                facere. Ullam quidem voluptatem eum ad magnam vel tempore, aspernatur quis atque inventore minima
                corrupti earum in est natus corporis doloremque. Nemo at consectetur accusantium architecto sapiente
                voluptatem quae?</p>
              <button>READ MORE</button>
          </div>
          <div className="images">
            <img src="Images/nature-pond.jpg" alt="nature-pond" />
              <h2>Fall in love with the divine of Nature</h2>
              <h3>Kumbakkonam</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia, ea cupiditate facere
                voluptatem quisquam sequi unde placeat doloremque omnis nisi, officiis voluptate assumenda quae
                tempore repellat ipsam laboriosam optio nemo quia numquam aliquam. Quis quia voluptates corporis ea
                perspiciatis atque sequi illum consequuntur officiis placeat. Voluptatibus minima dolore sit
                cupiditate tenetur. Accusantium aperiam maiores consequatur odit consectetur exercitationem,
                accusamus optio omnis vero recusandae amet distinctio obcaecati officia corporis facilis eaque est,
                unde error, delectus dolorum? Quibusdam, culpa. Libero expedita reprehenderit ipsam beatae accusamus
                voluptatibus hic sed obcaecati. Quae rem aspernatur tempore dolorem odio voluptates minima eius
                asperiores commodi nam.</p>
              <button>READ MORE</button>
          </div>
          <div className="images">
            <img src="Images/windmill.jpg" alt="windmill" />
              <h2>Energy drivien druve through the windmills</h2>
              <h3>Triruvanamalai</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, doloribus. Vero minima omnis
                sapiente pariatur voluptatibus. Expedita nulla, ad excepturi ea nihil dolore sequi placeat, optio
                cumque veniam enim reprehenderit tempore. Commodi delectus illum hic, minus dignissimos autem
                molestiae enim doloribus in veniam nihil sit nobis praesentium eveniet blanditiis temporibus. Minus
                labore, maxime qui deleniti sapiente eaque! Ad, dolores possimus? Saepe assumenda reiciendis
                voluptate rerum impedit placeat provident expedita corporis odio fuga. Inventore, adipisci tempore.
                Quaerat aspernatur fugiat sint, aliquam maxime ut voluptatum ratione voluptas, modi magni ex quis
                eaque, dolorem eum quidem. Ullam ut a iure eligendi ducimus illum.</p>
              <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="headline-contact">
          <h2>Contact Us</h2>
          <h3>Our Sales team Will Reach out to You ASAP!</h3>
        </div>
        <div className="contact-box">
          <label htmlFor="name">Name</label>
          <input type="text" />
            <label htmlFor="Town">Your Home Town</label>
            <select>
              <option value="Choose">Choose</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
            </select>
            <label htmlFor="Place">Where Would You Like To Go?</label>
            <select>
              <option value="Choose">Choose</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
            </select>
            <label htmlFor="Number">Contact number</label>
            <input type="text" />
              <button>SUBMIT INTEREST</button>

            </div>
        </div>
      </>
      )
}

      export default App
