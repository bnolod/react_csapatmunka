import { useState } from "react";

export const Addpost = () => {

    const [formData, setFormData] = useState({
        phone: "",
        title: "",
        content: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: name === "isActive" ? value === "true" : value, // Ha szükséges, boolean kezelése
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();
        try {
          const response = await fetch("/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Hiba történt a bejegyzés létrehozása közben.");
          }
    
          const result = await response.json();
          console.log("Sikeresen létrehozva:", result);
        } catch (error) {
          console.error("Hiba:", error);
        }
      };

    return(
        <>
            <form onSubmit={handleSubmit}>
               
                <label>
                    Cím:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Tartalom:
                    <textarea name="content" value={formData.content} onChange={handleChange} />
                </label>
                <label>
                    Telefonszám:
                    <textarea name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>
                    Kép URL:
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                </label>
                <button type="submit">Bejegyzés létrehozása</button>
            </form>
        </>
    )
}