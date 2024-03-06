import Header from './../components/Header';
import Hero from './../components/Hero';
import Main from './../components/Main';
import Card from './../components/Card';
import Footer from './../components/Footer';


function Home(){
  let arr = [
    {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
  },
  {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
  },
  {
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
  },
  {
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
  },{
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
  },{
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
  }
  ]
  return (
    <>
      <section className='header' style={{position:"sticky",top:"0",zIndex:"100"}}><Header /></section>   
      <section ><Hero /></section>
      <section style={{padding:"4rem 0"}}><Main /></section>
      <section style={{padding:"0.8rem 9rem"}}>
       
        <section className='card-section' style={{display:'flex',flexWrap:"wrap"}}>
          {arr.map((item,index)=>{
            return <Card key={index} desc={item.desc}/>
          })}
        </section>

      </section>
      <section > <Footer/></section>
      

    </>
  );

}

export default Home;
