import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProjectPage() {
  // Get the project project from the URL
  const router = useRouter();
  const { project } = router.query;

  // Verify that the project name is valid
  useEffect(() => {
    fetch(`https://api.github.com/repos/realTristan/${project}`).then(
      (response) => {
        if (!response.ok) {
          window.location.href = `https://github.com/Simpson-Computer-Technologies-Research/${project}`;
        } else {
          window.location.href = `https://github.com/realTristan/${project}`;
        }
      },
    );
  }, [project]);
}
