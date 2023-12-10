import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProjectPage() {
  // Get the project name from the URL
  const router = useRouter();
  const { name } = router.query;

  // Verify that the project name is valid
  useEffect(() => {
    fetch(`https://api.github.com/repos/realTristan/${name}`).then(
      (response) => {
        if (!response.ok) {
          window.location.href = `https://github.com/Simpson-Computer-Technologies-Research/${name}`;
        } else {
          window.location.href = `https://github.com/realTristan/${name}`;
        }
      },
    );
  }, [name]);
}
