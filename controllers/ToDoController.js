import ToDoModel from "../models/ToDoModel.js";

const getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

const saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added successfully..");
    console.log(data);
    res.send(data);
  });
};

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((error) => console.log(error));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((error) => console.log(error));
};

export default getToDo;
export { saveToDo };
export { updateTodo };
export { deleteTodo };
