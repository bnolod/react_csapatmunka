import React from "react";

function DeletePost({ id }: { id: string }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/post/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Hiba történt a bejegyzés törlése közben.");
      }

      console.log(`A(z) ${id} azonosítójú bejegyzés törölve.`);
    } catch (error) {
      console.error("Törlési hiba:", error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Bejegyzés törlése</button>
    </div>
  );
}

export default DeletePost;
