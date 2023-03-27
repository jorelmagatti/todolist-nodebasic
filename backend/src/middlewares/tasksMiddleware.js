const validateEspecialChars = (value) =>
{
  try{
    const regex = /^[\w&.\-]+$/;
    return regex.test(value);
  }catch(err)
  {
    return true;
  }
};

const validateBodyToPostTasks = (req, res, next) => {
  try {
    let { title } = req.body;
    
    if(!title || !title.trim().replace('\t','') || validateEspecialChars(title))
      return res.status(400).json({ erro: 'parametro não encontrado ou vazio!'});
    else{
      if(title === '' || title === undefined)
        res.status(400).json({ erro: 'parametro vazio'});

      next();        
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

const validateParamIdToDeleteTasks = (req, res, next) => {
  try {
    const id = req.query.id;

    if(!id || !id.trim().replace('\t','') || validateEspecialChars(id))
      return res.status(400).json({ erro: 'parametro não encontrado ou vazio invalido!'});
    else{
      if(id === '' || id === undefined || id === 0)
        res.status(400).json({ erro: 'parametro vazio'});

      next();        
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  validateBodyToPostTasks,
  validateParamIdToDeleteTasks
};