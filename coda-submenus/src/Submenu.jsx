import { useGlobalContext } from "./context";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  return <div>Submenu</div>;
};
export default Submenu;
