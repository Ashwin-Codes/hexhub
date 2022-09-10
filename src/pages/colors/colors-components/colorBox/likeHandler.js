// Components
import { toast } from 'react-toastify';
import chroma from 'chroma-js';

// Hooks
import useLocalStorage from '../../../../hooks/useLocalStorage';

export default function likeHandler(clr, dislike = false) {
  const { setItem, getItem, searchItem, appendItem } = useLocalStorage();

  // Dislike
  if (dislike) {
    const items = getItem('liked__colors');
    const filteredItems = items.filter((ele) => {
      return !(chroma(clr).hex() === ele);
    });
    setItem('liked__colors', JSON.stringify([...filteredItems]));

    if (!toast.isActive('delete')) {
      toast('Color Deleted !', {
        toastId: 'delete',
      });
    }

    return;
  }

  //   Like
  if (!searchItem('liked__colors')) {
    setItem('liked__colors', JSON.stringify([chroma(clr).hex()]));
    return;
  }

  const allItems = getItem('liked__colors');
  if (allItems.includes(chroma(clr).hex())) return;

  appendItem('liked__colors', chroma(clr).hex());
  if (!toast.isActive('like')) {
    toast('Color Saved', {
      toastId: 'like',
    });
  }
}
