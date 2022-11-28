const { Sequelize, DataTypes } = require('sequelize');




const sequelize = new Sequelize('notes','root','',{

  host:'localhost',
  'dialect':'mysql'
});


(async function(){
  
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

}())
const Note = sequelize.define('note', {
  id:{
    type:DataTypes.STRING,
    primaryKey:true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING(5000)
   
  }
}, {
 
});

sequelize.sync({force:false});
export default Note;
 