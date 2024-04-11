import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav';
import Card from './Card';
import Header from './header';
import Header2 from './Header2';
import Card3 from './Card3';
import Card2 from './card2';
import SimpleMap from './map';


var pricecard = [
  {
    Name: "rose",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LCmNQw1QXafe0YNV2r_JoKaOdySYLooSBA&s"
  },
  {
    Name: "rose",
    price: "50",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8SSfnc6KoZrXeUQdc5ACJnOdxHR8Ew91UrY-8jqrMXOtStQHmT5YfQ0BTqiNJGYsjk0&usqp=CAU"
  },
  {
    Name: "rose",
    price: "50",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPm1NONEbIRCY1diHmj-AMBPZ_uUFTgMbPieE23TgRSk5I7YdUwTKXy22Nfi_NCSOdg&usqp=CAU"
  },
  {
    Name: "rose",
    price: "50",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPnLLJdCAwz6gBG6ioQR50GXTe1X807uCeW6J1m_LvYwttz9T9IL4aTnuW23o4UwxagA&usqp=CAU"
  },

]

function App() {
  return (
    <section>
      <Nav></Nav>
      <div className='container-fluid'>
        <div className='row mt-5'>

          {
            pricecard.map((data) => {
              return <Card Dataprice={data}></Card>
            }
            )
          }

        </div>
      </div>
      <Header></Header>
      <div className='container'>
        <div className='row '>
          {
            pricecard.map((data) => {
              return <Card2 Dataprice={data}></Card2>
            }
            )
          }
        </div>
      </div>
      <Header2></Header2>
      <div className='container'>
        <div className='row '>
          {
            pricecard.map((data) => {
              return <Card3 Dataprice={data}></Card3>
            }
            )
          }
        </div>
      </div>

      <SimpleMap></SimpleMap>
    </section>



  );
}

export default App;
