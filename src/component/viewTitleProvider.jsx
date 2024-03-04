import {
  createContext,
  useCallback,
  useState
} from "react";
import ViewTitleContext from "./viewTitleContext"


const ViewTitleContextProvider = ({ children }) => {

  const [title, setTitle] = useState("");

  const changeTitle = useCallback((title) => {
    setTitle(title)
  }, [])


  return (
    <ViewTitleContext.Provider value={{ changeTitle, title }}>
      {children}
    </ViewTitleContext.Provider>
  )
}

export default ViewTitleContextProvider;