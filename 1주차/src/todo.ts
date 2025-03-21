document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("input-box") as HTMLInputElement;
  const todoList = document.getElementById("todoList") as HTMLDivElement;
  const doneList = document.getElementById("doneList") as HTMLDivElement;

  inputBox.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const text = inputBox.value.trim();
      if (text !== "") {
        addTaskList(text);
        inputBox.value = "";
      }
    }
  });

  function addTaskList(text: string): void {
    const task = document.createElement("div");
    task.classList.add("task");

    const taskText = document.createElement("p");
    taskText.textContent = text;

    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.addEventListener("click", () => moveTaskToDone(task, text));

    task.appendChild(taskText);
    task.appendChild(completeButton);
    todoList.appendChild(task);
  }

  function moveTaskToDone(task: HTMLDivElement, text: string): void {
    task.remove();

    const done = document.createElement("div");
    done.classList.add("task");

    const doneText = document.createElement("p");
    doneText.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => done.remove());

    done.appendChild(doneText);
    done.appendChild(deleteButton);
    doneList.appendChild(done);
  }
});
