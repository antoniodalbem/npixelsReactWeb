const musicData = [
    { artist: 'Adele', name: '25', sales : 1731000},
    { artist: 'Drake', name: '12', sales : 500000},
    { artist: 'Chris Stapleton', name: '84', sales : 600000},
    { artist: 'Pentatonix', name: '46', sales : 700000},
    { artist: 'Orginal Broadway Cast Recording', name: '32', sales : 4758210},
    { artist: 'Twenty One Pilots', name: '46', sales : 1234568},
    { artist: 'Hamilton : An American', name:'sadfsdfgsdfgsdfdfsadf', sales : 7894585},
    { artist: 'Prince', name: '78', sales : 147852},
    { artist: 'Rihanna', name: '15', sales : 147852},
    { artist: 'Justin Bieber', name: '12', sales : 126358659},
    { artist: 'Teste', name: '25', sales : 1425896},
    ];
    
    //console.log(musicData[0].name.length);
    
   // const albumSalesStrings = musicData.filter(a => a.name.length >= 10 && a.name.length <= 25);
   
   //const albumSalesStrings = musicData.filter(a => a.sales >= 1000000)
   //.map (a => `${a.artist} is a great performance`);
    
   
        
    const albumSalesStrings = musicData.map( a => `${a.name} by ${a.artist} sold ${a.sales} copies` 
   );
    
    console.log(albumSalesStrings);
    
    
    //25 by Adele sold 1731000 copies