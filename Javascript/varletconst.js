function f1() 
{
    const name = "Monika";

    if (true) 
    {
      console.log(name);

      const city = "Delhi";
      console.log(city);
    }

    function innerfn() 
    {
      console.log(city);
    }
    innerfn();
    //   console.log(city);
  }
  f1()