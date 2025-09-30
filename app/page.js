export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS работает!
        </h1>
        <p className="text-gray-600">
          Если вы видите этот стилизованный текст, значит Tailwind CSS настроен правильно.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Тестовая кнопка
        </button>
      </div>
    </div>
  )
}