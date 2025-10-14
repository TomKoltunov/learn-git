import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// נגדיר טיפוס (TypeScript interface) שמתאר את מבנה המשתמשים
interface User {
  id: number;
  name: string;
  email: string;
}

// קומפוננטה רגילה שמוגדרת עם const ולא עם function
const App: React.FC = () => {
  // שימוש ב-hook useQuery כדי למשוך נתונים מהשרת
  const { data, isLoading, isError, refetch } = useQuery<User[]>({
    // queryKey הוא מזהה ייחודי לנתונים האלה (ל-cache)
    queryKey: ['users'],
    // queryFn הוא הפונקציה שאחראית לבצע את הבקשה לשרת
    queryFn: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data; // מחזירים רק את הנתונים עצמם
    },
  });

  // טיפול במצבים שונים של הבקשה
  if (isLoading) {
    return <p>🔄 טוען נתונים...</p>;
  }

  if (isError) {
    return <p>❌ שגיאה בטעינת הנתונים</p>;
  }

  console.log("Hello! 2222");

  // אם הכל תקין – מציגים את הנתונים
  return (
    <div style={{ padding: '20px' }}>
      <h1>👥 רשימת משתמשים</h1>
      <button onClick={() => refetch()}>🔁 רענן נתונים</button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
