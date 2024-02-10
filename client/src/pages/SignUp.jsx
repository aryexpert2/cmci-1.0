import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); 
    // la methode trim() permet de supprimer les espaces inutiles au début et à la 
    // fin de la chaine de caractères lors de la saisie dans le formulaire  
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // evite un rafraichissement de la page qui fera perdre les données du formulaire 

    if(!formData.username || !formData.email || !formData.password) {
      return  setErrorMessage("Please fill in all the fields!");
    }

    try {
      setLoading(true); // on désactive le bouton pendant le chargement
      setErrorMessage(null); // on efface le message d'erreur
      // res est la promesse retournée par fetch pour savoir si la requête va bien se passer ou non
      // on va se servir d'un proxy pour éviter de mettre des URL complètes
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // on transforme l'objet JSON(formData) en une chaine JSON
      });
      const data = await res.json(); // on récupère les données de la promesse res sous forme de JSON
      if(data.success === false) {
        setErrorMessage(data.message); // erreur liée au user
      }
      setLoading(false); // on réactive le bouton après le chargement
      if(res.ok) {
        navigate("/sign-in"); // on redirige l'utilisateur vers la page de connexion
      }
    } catch (error) {
      setErrorMessage(error.message); // erreur liée au serveur
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500
                      via-purple-500 to-pink-500 rounded-lg text-white"
            >
              CmCi
            </span>
            app
          </Link>
          <p className="text-sm mt-5">
            This is the demo project. You can Sign up with your email and
            password or with your Google account.
          </p>
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="">
              <Label value="your username" />
              <TextInput type="text" placeholder="John Doe" id="username" onChange={handleChange} />
            </div>
            <div className="">
              <Label value="your email" />
              <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange} />
            </div>
            <div className="">
              <Label value="your password" />
              <TextInput type="password" placeholder="123456" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                )
                 : "Sign Up"
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
              <span>Already have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign in
              </Link>
        </div>
        {
          errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )
        }
      </div>
    </div>
  </div>
  );
}
