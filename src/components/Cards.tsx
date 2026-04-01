interface CardProps {
  id : number | null;
  name: string | null;
  email: string | null;
  age: number | null;
  onDelete: (age: number | null) => void;
}

export default function Cards({ id , name, email, age, onDelete }: CardProps) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      <div className="w-full h-50">
        <img
          src="/src/assets/user.png"
          alt="Sample"
          className="w-full h-full"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>

        <p className="text-gray-700 mb-4">
          <b>ID : </b>{id} <br />
          <b>EMAIL : </b>{email} <br />
          <b>AGE : </b>{age}
        </p>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors cursor-pointer"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}