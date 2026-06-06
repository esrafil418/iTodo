import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export const sampleTasks: Task[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "خرید مواد غذایی",
    isCompleted: false,
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    title: "انجام تمرین ورزشی",
    isCompleted: true,
  },
  {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    title: "خواندن کتاب",
    isCompleted: false,
  },
  {
    id: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
    title: "پاسخ به ایمیل‌ها",
    isCompleted: false,
  },
  {
    id: "6ba7b813-9dad-11d1-80b4-00c04fd430c8",
    title: "تماس با خانواده",
    isCompleted: true,
  },
  {
    id: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
    title: "برنامه‌ریزی هفتگی",
    isCompleted: false,
  },
  {
    id: "6ba7b815-9dad-11d1-80b4-00c04fd430c8",
    title: "یادگیری زبان جدید",
    isCompleted: false,
  },
  {
    id: "6ba7b816-9dad-11d1-80b4-00c04fd430c8",
    title: "تمیز کردن خانه",
    isCompleted: true,
  },
  {
    id: "6ba7b817-9dad-11d1-80b4-00c04fd430c8",
    title: "پرداخت قبض‌ها",
    isCompleted: false,
  },
  {
    id: "6ba7b818-9dad-11d1-80b4-00c04fd430c8",
    title: "نوشتن مقاله",
    isCompleted: false,
  },
  {
    id: "6ba7b819-9dad-11d1-80b4-00c04fd430c8",
    title: "خرید هدیه تولد",
    isCompleted: true,
  },
  {
    id: "6ba7b81a-9dad-11d1-80b4-00c04fd430c8",
    title: "مراجعه به پزشک",
    isCompleted: false,
  },
  {
    id: "6ba7b81b-9dad-11d1-80b4-00c04fd430c8",
    title: "تعمیر لوازم منزل",
    isCompleted: false,
  },
  {
    id: "6ba7b81c-9dad-11d1-80b4-00c04fd430c8",
    title: "مطالعه اخبار روز",
    isCompleted: true,
  },
  {
    id: "6ba7b81d-9dad-11d1-80b4-00c04fd430c8",
    title: "آموزش برنامه‌نویسی",
    isCompleted: false,
  },
  {
    id: "6ba7b81e-9dad-11d1-80b4-00c04fd430c8",
    title: "سفر برنامه‌ریزی شده",
    isCompleted: false,
  },
  {
    id: "6ba7b81f-9dad-11d1-80b4-00c04fd430c8",
    title: "شرکت در جلسه کاری",
    isCompleted: true,
  },
  {
    id: "6ba7b820-9dad-11d1-80b4-00c04fd430c8",
    title: "نگارش گزارش ماهانه",
    isCompleted: false,
  },
  {
    id: "6ba7b821-9dad-11d1-80b4-00c04fd430c8",
    title: "خرید لوازم تحریر",
    isCompleted: false,
  },
  {
    id: "6ba7b822-9dad-11d1-80b4-00c04fd430c8",
    title: "رسیدگی به گیاهان آپارتمانی",
    isCompleted: true,
  },
];

type ITasksContext = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  toggleTaskCompleted: (taskId: Task["id"]) => void;
  creatTask: (taskTitle: Task["title"]) => void;
};

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
  toggleTaskCompleted: () => {},
  creatTask: () => {},
});

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [...sampleTasks]);

  const toggleTaskCompleted = (taskId: Task["id"]) => {
    const clonedTasks = [...tasks];
    const changedTasks = clonedTasks.map((ct) =>
      ct.id === taskId ? { ...ct, isCompleted: !ct.isCompleted } : ct,
    );
    setTasks(changedTasks);
  };

  const creatTask = (taskTitle: Task["title"]) => {
    const newTask: Task = {
      title: taskTitle,
      id: uuidv4(),
      isCompleted: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, creatTask, toggleTaskCompleted }}
    >
      {children}
    </TasksContext.Provider>
  );
}
