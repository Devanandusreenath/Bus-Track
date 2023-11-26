var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mysql=require('mysql');
var name;
let x;
let y;
let z;
let p;
let q;
let r;
let s;
let t;
let u;
let v;
let a;
let count;
let formattedResults;
let variable;
let k;
let nam;
let owner;
let fro;
let froi=[];
let b;
let c;
let d;
let i;
let j;
let e;
let g;
let h;
let m;
let n;
let na;
let ow;
let ii;
let jj;
let naa;
let oww;
let naaa;
let o;
let fr;
let de;
let idnu;
let co;
let fa;
let fav;
let fee;
let fed;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var con = mysql.createConnection(
  {
      host: "localhost",
      user: "root",
      password: "India@0306",
  }
);
router.post('/submit',function(req,res){
  const username = req.body.email;
  const password = req.body.password;
  const sqlQuery = 'SELECT * FROM bus.user WHERE email = ? AND password = ?';
  con.query(sqlQuery, [username, password], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    x=results.map(row => row['name']);
    console.log(x)
    if (results.length > 0) {
      const userRoles = results[0].role;
       if (userRoles.includes('admin')) {
        
        res.render('succa', {x});
    }
  else{
    res.render('succ', {x});
  }}
     else {
      res.render('error', { message: 'Invalid credentials' });
    }
  
  });

});

router.post('/check',function(req,res){
  const username = req.body.email;
  const password = req.body.password;
  const sqlQuery = 'SELECT distinct fro FROM buslists.buses';
  const sqlQuerys = 'SELECT distinct des FROM buslists.buses';
  con.query(sqlQuery, [username, password], (queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      y=results.map((result)=>({
          field1 : result.fro
      }))
      console.log(y)
})
con.query(sqlQuerys, [username, password], (queryError, results) => {
  if (queryError) {
    console.error('Error executing SQL query:', queryError);
    res.render('error', { message: 'Error querying the database' });
    return;
  }
  z=results.map((result)=>({
      field1 : result.des
  }))
  console.log(z)
})
con.query(sqlQuerys, [username, password], (queryError, results) => {
  if (queryError) {
    console.error('Error executing SQL query:', queryError);
    res.render('error', { message: 'Error querying the database' });
    return;
  }
  p=results.map((result)=>({
      field1 : result.des
  }))
  console.log(p)
  res.render('che',{x,y,z,p})
})
//res.render('che',{x,y,z,p})
}

)
router.post('/che',function(req,res){
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const sqlQuery ="SELECT * FROM buslists.buses where fro= ? and des= ? and busavail='yes'";
  con.query(sqlQuery, [option1, option2], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
     q=results.map((result)=>({
      field1 : result.name,
      field2 : result.fro,
      field3 : result.des,
      field4 : result.time
  }))
  console.log(q);
  res.render('des',{x,message: q})
  }
  )
  //res.render('des',{x,message: q})

})
router.post('/ch',function(req,res){
  const option3 = req.body.option3;
  const sqlQuery ="SELECT * FROM buslists.buses where fro= ? or des= ? and busavail='yes'";
  con.query(sqlQuery, [option3, option3], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
     r=results.map((result)=>({
      field1 : result.name,
      field2 : result.fro,
      field3 : result.des,
      field4 : result.time
  }))
  console.log(q);
  res.render('stop',{x,message: r})
  }
  )
  //res.render('stop',{x,message: r})

})

router.post('/track',function(req,res){
  const sqlQuery = 'SELECT distinct name FROM buslists.buses where busavail="yes"';
  con.query(sqlQuery,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      s=results.map((result)=>({
          field1 : result.name
      }))
      console.log(s);
      res.render('bname',{x,s})
})

//res.render('bname',{x,s})
}
)
router.post('/trac',function(req,res){
  const option4 = req.body.option4;
  const sqlQuery ="SELECT * FROM btrack.track where name = ?";
  con.query(sqlQuery, [option4], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
   
     t=results.map((result, index) => {
      if (index < 3) {
        result.color = 'red';
      } else if (index === 3) {
        result.color = 'green';
      } else {
        result.color = 'orange';
      }
      result.field1 = result.name;
      result.field2 = result.fro;
      result.field3 = result.des;
      result.field4 = result.time;
      return result;
    }
     );
  console.log(t);
  res.render('btrack',{x,t});
  }
  )
  //res.render('btrack',{x,t})

})
router.post('/pro',function(req,res){
  
  const sqlQuery = 'SELECT * FROM bus.user WHERE name = ?';
  con.query(sqlQuery, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    u=results.map((result)=>({
      field1 : result.name,
      field2 : result.email,
      field3 : result.phonenumber,
      field4 : result.password,
      field5 : result.iduser
  }));
  a=results.map(row => row['iduser']);;
  const sqlQuerys = 'SELECT * FROM buslists.buses WHERE owner = ?';
  con.query(sqlQuerys, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    if (results.length > 0) {
      variable="YOUR BUSES";
      res.render('profile',{x,u,variable});
    } else {
      const sqlQuer = 'SELECT * FROM appro.approval WHERE owner = ?';
  con.query(sqlQuer, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    if (results.length > 0) {
      variable="WAITING FOR APPROVAL";
    } else {
      variable="APPLY FOR YOUR BUSES";
    }
    res.render('profile',{x,u,variable});
    })
    
  }
  })
console.log(a);
  console.log(u);
 // res.render('profile',{x,u,variable});
  });
 // res.render('profile',{x,u})


});
router.post('/reg',function(req,res){
  res.render('register');
})
router.post('/regi',function(req,res){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  x=name;
  const sqlQuery = 'INSERT INTO bus.user(name,email,phonenumber,password) VALUES( ? , ? , ? , ?)';
  con.query(sqlQuery, [name,email,phone,password], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
   
      res.render('succ', {x});
  });

});
router.post('/succ',function(req,res){
  res.render('succ',{x});
})
router.post('/succa',function(req,res){
  res.render('succa',{x});
})
router.post('/search',function(req,res){
  res.render('che',{x});
})
router.post('/traaa',function(req,res){
  res.render('bname',{x});
})
router.post('/contact',function(req,res){
  res.render('contact',{x});
})
router.post('/mail', (req, res) => {
const name =req.body.name;
const mail=req.body.mail;
const subject=req.body.subject;
const message=req.body.message;
const sqlQuery = 'INSERT INTO contacts.contact(name,mail,subject,message) VALUES( ? , ? , ? , ?)';
con.query(sqlQuery, [name,mail,subject,message], (queryError, results) => {
  if (queryError) {
    console.error('Error executing SQL query:', queryError);
    res.render('error', { message: 'Error querying the database' });
    return;
  }
 
    res.render('succ', {x});
});

});
router.post('/proedit',function(req,res){
  res.render('editdetails',{u});
})
router.post('/doneedit',function(req,res){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  x=name;
  const sqlQuery = 'UPDATE bus.user SET name = ?, email = ?, phonenumber = ?, password = ? WHERE iduser = ?';
  con.query(sqlQuery, [name,email,phone,password,a], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
   
  });
  const sqlQuerys = 'SELECT * FROM bus.user WHERE name = ?';
  con.query(sqlQuerys, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    v=results.map((result)=>({
      field1 : result.name,
      field2 : result.email,
      field3 : result.phonenumber,
      field4 : result.password
  }))
  console.log(v);
  res.render('newpro',{x,v,variable});
  });
  //res.render('newpro',{x,v})
});
router.post('/procheck',function(req,res){
  if(variable === 'YOUR BUSES')
  {
    const sqlQuerys = 'SELECT distinct name FROM buslists.buses WHERE owner = ?';
  con.query(sqlQuerys, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    k=results.map((result)=>({
      field1 : result.name
  }));
  res.render('yourbuses',{x,k});
  })
  }
 else if(variable === 'APPLY FOR YOUR BUSES'){
  res.render('apply',{x});
 }
})
router.post('/appr',function(req,res){
   nam = req.body.name;
   owner = req.body.owner;
    fro = req.body.fro;
    for(i=1;i<=fro;i++){
      froi[i]=i;
    }
    if(i>fro){
  res.render('applyn.hbs',{x,froi});
}
}
)
router.post('/appro',function(req,res){

 const buslist=[];
 for(i=1;i<=fro;i++){
  const textboxValue = req.body[`buslist${i}`];
  buslist.push(textboxValue);
 }
 console.log(buslist);

 const buslis=[];
 for(i=1;i<=fro;i++){
  const textboxValue1 = req.body[`buslis${i}`];
  buslis.push(textboxValue1);
 }
 const busli=[];
 for(i=1;i<=fro;i++){
  const textboxValue2 = req.body[`busli${i}`];
  busli.push(textboxValue2);
 }
const sqlQuerys = 'INSERT INTO appro.approval (name,owner,fro,des,time) VALUES (?,?,?,?,?)';
for(i=0;i<fro;i++)
 {
  for(j=i;j<fro;j++)
  {
    b=buslist[i];
    c=buslis[j];
    d=busli[j];
    console.log(b,c,d);
con.query(sqlQuerys, [nam,owner,b,c,d], (queryError, results) => {
  if (queryError) {
    console.error('Error executing SQL query:', queryError);
    res.render('error', { message: 'Error querying the database' });
    return;
  }
  
})
  }
}
const sqlQuery = 'INSERT INTO appro.approvalt (name,owner,fro,des,time) VALUES (?,?,?,?,?)';
for(ii=0,jj=0;ii<fro;ii++,jj++)
 {
 
    b=buslist[ii];
    c=buslis[jj];
    d=busli[jj];
    console.log(b,c,d);
con.query(sqlQuery, [nam,owner,b,c,d], (queryError, results) => {
  if (queryError) {
    console.error('Error executing SQL query:', queryError);
    res.render('error', { message: 'Error querying the database' });
    return;
  }
  
})
  }


if(ii==fro)
{
  variable="WAITING FOR APPROVAL";
  res.render('profile',{x,u,variable});
}
})
router.post('/admiu',function(req,res){
  const sqlQuery = 'SELECT * FROM bus.user where role !="admin"';
  con.query(sqlQuery,(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    e=results.map((result)=>({
      field1 : result.name,
      field2 : result.email,
      field3 : result.phonenumber,
      field4 : result.password,
      field5 : result.iduser
  }));
  res.render('admiu',{x,e});

})
})
router.post('/admiud',function(req,res){
  const name = req.body.username;
  const email = req.body.mail;
  const phone = req.body.phone;
  const sqlQuery = 'delete  FROM bus.user where email = ?';
  con.query(sqlQuery,[email],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuerys = 'SELECT * FROM bus.user where role !="admin"';
    con.query(sqlQuerys,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      e=results.map((result)=>({
        field1 : result.name,
        field2 : result.email,
        field3 : result.phonenumber,
        field4 : result.password,
        field5 : result.iduser
    }));
    res.render('admiu',{x,e});
  
  })

  }
  )
}
)
router.post('/admib',function(req,res){
  const sqlQuery = 'SELECT distinct name,owner FROM buslists.buses';
  con.query(sqlQuery,(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    f=results.map((result)=>({
      field1 : result.name,
      field2 : result.owner,
  }));
  res.render('admibu',{x,f});

})
})
router.post('/admibu',function(req,res){
   naa = req.body.bname;
   oww = req.body.oname;
  console.log(name,owner);
  const sqlQuery = 'SELECT * FROM buslists.buses where name = ? and owner = ?';
  con.query(sqlQuery,[naa,oww],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    h=results.map((result)=>({
      field1 : result.name,
      field2 : result.owner,
      field3 : result.fro,
      field4 : result.des,
      field5 : result.time
  }));
  console.log(h);
  res.render('admibus',{x,h});

})
})
router.post('/admia',function(req,res){
  const sqlQuery = 'SELECT distinct name,owner FROM appro.approval';
  con.query(sqlQuery,(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    m=results.map((result)=>({
      field1 : result.name,
      field2 : result.owner,
  }));
  res.render('admia',{x,m});

})
})
router.post('/admiap',function(req,res){
   na = req.body.bname;
   ow = req.body.oname;
  console.log(na,ow);
  const sqlQuery = 'SELECT * from appro.approval where name = ? and owner = ?';
  con.query(sqlQuery,[na,ow],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    n=results.map((result)=>({
      field1 : result.name,
      field2 : result.owner,
      field3 : result.fro,
      field4 : result.des,
      field5 : result.time
  }));
  console.log(n);
  res.render('admiap',{x,n});

})
})

router.post('/admiapr',function(req,res){
  const sqlQuery = 'INSERT INTO buslists.buses (name,owner,fro,des,time) select name,owner,fro,des,time from appro.approval where name = ? and owner = ?';
  const sqlQue = 'INSERT INTO buslists.buses (name,owner,fro,des,time) select name,owner,fro,des,time from appro.approvalt where name = ? and owner = ?';
  con.query(sqlQue,[na,ow],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQ='delete from appro.approvalt where name = ? and owner = ?';
    con.query(sqlQ,[na,ow],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      } 
    }
    )
  }
  )
  con.query(sqlQuery,[na,ow],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuerys='delete from appro.approval where name = ? and owner = ?';
    con.query(sqlQuerys,[na,ow],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      const sqlQuer = 'SELECT distinct name,owner FROM appro.approval';
      con.query(sqlQuer,(queryError, results) => {
        if (queryError) {
          console.error('Error executing SQL query:', queryError);
          res.render('error', { message: 'Error querying the database' });
          return;
        }
      
        m=results.map((result)=>({
          field1 : result.name,
          field2 : result.owner,
      }));
      res.render('admia',{x,m});
    
    })

    }
    )

  })

})

router.post('/admiapd',function(req,res){
  const sqlQuerys='delete from appro.approval where name = ? and owner = ?';
  const sqlQu='delete from appro.approvalt where name = ? and owner = ?';
  con.query(sqlQuerys,[na,ow],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  }
  )
  con.query(sqlQu,[na,ow],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuer = 'SELECT distinct name,owner FROM appro.approval';
    con.query(sqlQuer,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      m=results.map((result)=>({
        field1 : result.name,
        field2 : result.owner,
    }));
    res.render('admia',{x,m});
  
  })

  }
  )

})
router.post('/admibud',function(req,res){
  const sqlQuerys='delete from buslists.buses where name = ? and owner = ?';
  const sqlQu='delete from buslists.buses where name = ? and owner = ?';
  con.query(sqlQuerys,[naa,oww],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  }
  )
  con.query(sqlQu,[naa,oww],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuery = 'SELECT distinct name,owner FROM buslists.buses';
    con.query(sqlQuery,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      f=results.map((result)=>({
        field1 : result.name,
        field2 : result.owner,
    }));
    res.render('admibu',{x,f});
  
  })

  }
  )

})
router.post('/yblist',function(req,res){
naaa = req.body.bname;
const sqlQuery = 'SELECT fro,des FROM buslists.buses where name = ?';
  con.query(sqlQuery,[naaa],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    o=results.map((result)=>({
      field1 : result.fro,
      field2 : result.des,
  }));
  res.render('blist',{x,o});

})
}
)
router.post('/ybedit',function(req,res){
fr=req.body.fro;
de=req.body.des;
const sqlQuery = 'SELECT idbuses FROM buslists.buses where name = ? and fro = ? and des = ?';
  con.query(sqlQuery,[naaa,fr,de],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  idnu=results.map(row => row['idbuses']);
  res.render('bedit',{x,fr,de})
  }
  )

})
router.post('/ybedits',function(req,res){
  fr=req.body.fro;
  de=req.body.des;
  const sqlQuery = 'update buslists.buses set fro = ? where idbuses = ?';
    con.query(sqlQuery,[fr,idnu],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    }
    )
    const sqlQuer = 'update buslists.buses set des = ? where idbuses = ?';
    con.query(sqlQuer,[de,idnu],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      const sqlQuery = 'SELECT fro,des FROM buslists.buses where name = ?';
  con.query(sqlQuery,[naaa],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    o=results.map((result)=>({
      field1 : result.fro,
      field2 : result.des,
  }));
  res.render('blist',{x,o});

})
    }
    )
  })
  router.post('/beditd',function(req,res){
    const sqlQuery = 'delete from buslists.buses where idbuses = ?';
    con.query(sqlQuer,[idnu],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      const sqlQuery = 'SELECT fro,des FROM buslists.buses where name = ?';
  con.query(sqlQuery,[naaa],(queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
  
    o=results.map((result)=>({
      field1 : result.fro,
      field2 : result.des,
  }));
  res.render('blist',{x,o});

})
    }
    )
  }
  )
  router.post('/admic',function(req,res){
    const sqlQuery = 'SELECT * from contacts.contact';
    con.query(sqlQuery,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      co=results.map((result)=>({
        field1 : result.name,
        field2 : result.mail,
        field3 : result.subject,
        field4 : result.message
    }));
    res.render('admic',{x,co});
  
  }) 

  }
  )
  router.post('/contmail',function(req,res){
    var toooo=req.body.email;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '3admbbs@gmail.com',
        pass: 'emso mngt yras kadt'
      }
    });
    
    var mailOptions = {
      from: '3admbbs@gmail.com',
      to: toooo,
      subject: 'Sending Email from 3ad',
      text: 'Your message has been read and action is been taken'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    const sqlQuery = 'SELECT * from contacts.contact';
    con.query(sqlQuery,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      co=results.map((result)=>({
        field1 : result.name,
        field2 : result.mail,
        field3 : result.subject,
        field4 : result.message
    }));
    res.render('admic',{x,co});
  
  }) 
     

  }
  )
  router.post('/logout',function(req,res){
    
      // Redirect to the sign-in page
      res.redirect('/');

 
  }
  )
  router.post('/fa',function(req,res){
    const sqlQuery = 'SELECT * from favorites.favourites where user = ?';
    con.query(sqlQuery,[x],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      fa=results.map((result)=>({
        field1 : result.name,
        field2 : result.owner
    }));
    res.render('fa',{x,fa});
  
  })  
  }
  )
  router.post('/fav',function(req,res){
    const sqlQuery = 'SELECT distinct name FROM buslists.buses';
    con.query(sqlQuery,(queryError, results) => {
        if (queryError) {
          console.error('Error executing SQL query:', queryError);
          res.render('error', { message: 'Error querying the database' });
          return;
        }
        s=results.map((result)=>({
            field1 : result.name
        }))
        console.log(s);
        res.render('fav',{x,s})
  })
  }
  )
  router.post('/favo',function(req,res){
    const option4 = req.body.option4;
    const sqlQuery ="SELECT distinct owner FROM btrack.track where name = ?";
    con.query(sqlQuery, [option4], (queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
       fav=results.map(row => row['owner']);
       const sqlQuerys ="INSERT INTO favorites.favourites(name,owner,user) VALUES( ? , ? , ? )  ";
       con.query(sqlQuerys, [option4,fav,x], (queryError, results) => {
        if (queryError) {
          console.error('Error executing SQL query:', queryError);
          res.render('error', { message: 'Error querying the database' });
          return;
        }
        res.render('succ',{x})
      }
       )
    })

  })
  router.post('/fad',function(req,res){
    const name = req.body.name;
    const owner = req.body.owner;
    const sqlQuery ="delete FROM favorites.favourites where name = ? and owner = ?";
    con.query(sqlQuery, [name,owner], (queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      const sqlQuerys = 'SELECT * from favorites.favourites where user = ?';
      con.query(sqlQuerys,[x],(queryError, results) => {
        if (queryError) {
          console.error('Error executing SQL query:', queryError);
          res.render('error', { message: 'Error querying the database' });
          return;
        }
      
        fa=results.map((result)=>({
          field1 : result.name,
          field2 : result.owner
      }));
      res.render('fa',{x,fa});
    
    })  
    }
     )
  }
  )
  router.post('/avail',function(req,res){
    const name=req.body.value;
  const sqlQuery = "INSERT INTO favorites.notification(notification,user,name) select 'bus is available',user,name from favorites.favourites where name = ?";
  const sqlQuerys="update buslists.buses set busavail='yes' where name = ?";
  const sqlQueryss="update btrack.track set busavail='yes' where name = ?";
  con.query(sqlQuery, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }

  }
  )
  con.query(sqlQuerys, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }

  }
  )
  con.query(sqlQueryss, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuerys = 'SELECT distinct name FROM buslists.buses WHERE owner = ?';
    con.query(sqlQuerys, [x], (queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      k=results.map((result)=>({
        field1 : result.name
    }));
    res.render('yourbuses',{x,k});
    })
  }
  )
  }
  )
  router.post('/navail',function(req,res){
    const name=req.body.value;
  const sqlQuery = "INSERT INTO favorites.notification(notification,user,name) select 'bus is not available',user,name from favorites.favourites where name = ?";
  const sqlQuerys="update buslists.buses set busavail='no' where name = ?";
  const sqlQueryss="update btrack.track set busavail='no' where name = ?";
  con.query(sqlQuery, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }

  }
  )
  con.query(sqlQuerys, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }

  }
  )
  con.query(sqlQueryss, [name], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    const sqlQuerys = 'SELECT distinct name FROM buslists.buses WHERE owner = ?';
    con.query(sqlQuerys, [x], (queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      k=results.map((result)=>({
        field1 : result.name
    }));
    res.render('yourbuses',{x,k});
    })
  }
  )
  }
  )
  router.post('/not',function(req,res){
    const sqlQuery = 'SELECT * from favorites.notification where user = ? order by idnotification DESC';
    con.query(sqlQuery,[x],(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
    
      let faaa=results.map((result)=>({
        field1 : result.notification,
        field2 : result.name
    }));
    res.render('notification',{x,faaa});
  
  })  

  }
  )

  
router.post('/proa',function(req,res){
  
  const sqlQuery = 'SELECT * FROM bus.user WHERE name = ?';
  con.query(sqlQuery, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    u=results.map((result)=>({
      field1 : result.name,
      field2 : result.email,
      field3 : result.phonenumber,
      field4 : result.password,
      field5 : result.iduser
  }));
  a=results.map(row => row['iduser']);;
  const sqlQuerys = 'SELECT * FROM buslists.buses WHERE owner = ?';
  con.query(sqlQuerys, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    if (results.length > 0) {
      variable="YOUR BUSES";
      res.render('profile',{x,u,variable});
    } else {
      const sqlQuer = 'SELECT * FROM appro.approval WHERE owner = ?';
  con.query(sqlQuer, [x], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    if (results.length > 0) {
      variable="WAITING FOR APPROVAL";
    } else {
      variable="APPLY FOR YOUR BUSES";
    }
    res.render('profilea',{x,u,variable});
    })
    
  }
  })
console.log(a);
  console.log(u);
 // res.render('profile',{x,u,variable});
  });
 // res.render('profile',{x,u})


});
router.post('/feed',function(req,res){
  const sqlQuery = 'SELECT distinct name FROM buslists.buses';
  con.query(sqlQuery,(queryError, results) => {
      if (queryError) {
        console.error('Error executing SQL query:', queryError);
        res.render('error', { message: 'Error querying the database' });
        return;
      }
      s=results.map((result)=>({
          field1 : result.name
      }))
      console.log(s);
      res.render('feed',{x,s})
})
}
)
router.post('/feedb',function(req,res){
  const option4 = req.body.option4;
  res.render('feedb',{x,option4})
}
)
router.post('/feedba',function(req,res){
  const bname=req.body.bnam;
  const uname=req.body.bna;
  const feed=req.body.bn;
  const sqlQuerys ="INSERT INTO feedback.feedback(name,user,feedback) VALUES( ? , ? , ? )  ";
  con.query(sqlQuerys, [bname,uname,feed], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
     res.render('succ',{x});
  }
  )
}
)
router.post('/feedback',function(req,res){
  const bname=req.body.value;
  const sqlQuerys ="select * from feedback.feedback where name = ? ";
  con.query(sqlQuerys, [bname], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    fee=results.map((result)=>({
      field1 : result.name,
      field2 : result.user,
      field3 : result.feedback
  }));
     res.render('feedback',{x,fee});
  }
  )
}
)
router.post('/feedbacka',function(req,res){
  const bname=req.body.value;
  const sqlQuerys ="select * from feedback.feedback where name = ? ";
  con.query(sqlQuerys, [bname], (queryError, results) => {
    if (queryError) {
      console.error('Error executing SQL query:', queryError);
      res.render('error', { message: 'Error querying the database' });
      return;
    }
    fee=results.map((result)=>({
      field1 : result.name,
      field2 : result.user,
      field3 : result.feedback
  }));
     res.render('feedbacka',{x,fee});
  }
  )
}
)
router.post('/appl',function(req,res){
  res.render('apply',{x});

}
)

module.exports = router;