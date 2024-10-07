import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PlusCircle,
  Search,
  MoreVertical,
  Edit,
  Trash,
  Copy,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  createTemplate,
  deleteTemplate,
  getUserTemplates,
} from "@/services/template.service";
import { useNavigate } from "react-router-dom";

const templatesMock = [
  {
    template_id: "1",
    name: "Landing Page",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
  {
    template_id: "2",
    name: "Portafolio",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
  {
    template_id: "3",
    name: "Blog Personal",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
  {
    template_id: "4",
    name: "Tienda Online",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
  {
    template_id: "5",
    name: "Currículum Vitae",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
  {
    template_id: "6",
    name: "Evento",
    imageUrl: "/src/assets/img-placeholder.webp",
    background: "#000000",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState(templatesMock);
  useEffect(() => {
    (async () => {
      try {
        const response = await getUserTemplates();
        setTemplates(
          response.map((el: any) => ({
            template_id: el.template_id,
            imageUrl: el.photo,
            name: el.name,
            background: el.background,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleClick = async () => {
    const response = await createTemplate({});
    navigate(`/editor/${response.template_id}`);
  };

  const handleDelete = async (templateId: string) => {
    await deleteTemplate(templateId);
    setTemplates((prevTemplates) =>
      prevTemplates.filter((template) => template.template_id !== templateId)
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-purple-300">
            Mis LinkTemplates
          </h1>
          <div className="flex items-center gap-4">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <Input
                type="search"
                placeholder="Buscar templates..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full bg-gray-900 border-purple-700 text-purple-100 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div> */}
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full relative overflow-hidden group"
              onClick={handleClick}
            >
              <span className="relative z-10 flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" /> Nuevo Template
              </span>
              <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-25 transition-opacity  animate-pulse"></span>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <div
                  className="w-full aspect-square flex justify-center items-center"
                  style={{ background: template.background }}
                >
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    width={150}
                    height={150}
                    className="h-3/4 w-3/4 object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 left-2 bg-purple-800 hover:bg-purple-700 text-purple-100"
                    aria-label={`Editar ${template.name}`}
                    onClick={() => {
                      navigate(`/editor/${template.template_id}`);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2 bg-purple-800 hover:bg-purple-700 text-purple-100"
                        aria-label="Más opciones"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-gray-900 text-purple-100 border-purple-700"
                    >
                      {/* <DropdownMenuItem className="hover:bg-purple-800 focus:bg-purple-800">
                        <Copy className="mr-2 h-4 w-4" /> Duplicar
                      </DropdownMenuItem> */}
                      <DropdownMenuItem
                        className="text-red-400 hover:bg-purple-800 group hover:text-white focus:bg-purple-800 cursor-pointer"
                        onClick={() => handleDelete(template.template_id)}
                      >
                        <Trash className="mr-2 h-4 w-4 group-hover:text-white" />{" "}
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
