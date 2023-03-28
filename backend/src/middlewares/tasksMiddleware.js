const validateEspecialChars = (value) =>
{
  try{
    const regex = /[^a-zA-Z 0-9]+/g;
    return regex.test(value);
  }catch(err)
  {
    return true;
  }
};

const validateTitleToPostTasks = (req, res, next) => {
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

const validateStatusToPostTasks = (req, res, next) => {
  try {
    let { status } = req.body;
    
    if(!status || !status.trim().replace('\t','') || validateEspecialChars(status))
      return res.status(400).json({ erro: 'parametro não encontrado ou vazio!'});
    else{
      if(status === '' || status === undefined)
        res.status(400).json({ erro: 'parametro vazio'});

      next();        
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

const validateIdToPostTasks = (req, res, next) => {
  try {
    let { id } = req.body;
    
    if(!id)
      return res.status(400).json({ erro: 'parametro não encontrado ou vazio!'});
    else{
      if(id === undefined || id === 0)
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
  validateTitleToPostTasks,
  validateStatusToPostTasks,
  validateParamIdToDeleteTasks,
  validateIdToPostTasks
};