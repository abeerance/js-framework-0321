# Code

Erstelle einen neuen Ordner in dem gewünschten Ordner:

```css
npx create-react-app 03-trivia-game --template typescript

ODER

npx create-react-app@next --scripts-version=@next --template=typescript@next 03-trivia-game
```

Ordnerstruktur einbauen, css styles und logo verschieben sowie Imports ausbessern:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fc10b5e-37d2-412b-b354-ac5d18bd5fda/Untitled.jpeg)

1. Install MUI, React Router, React Hook Form und Framer Motion

```css
npm install @mui/material @emotion/react @emotion/styled

npm i framer-motion

npm i axios
```

1. Themes erstellen und landing page vorbereiten

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3505a309-0175-4f9f-b059-2077748b1155/Untitled.jpeg)

1. Trivia card erstellen:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f273563f-3587-4681-827e-964e1a50f89f/Untitled.jpeg)

1. Implement Trivia card in App

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3da2226-c6e4-496c-885f-3bbd1e31ee68/Untitled.jpeg)

1. Create form (style) in trivia card in App. 
**NUR NUMBER UND CATEGORY IMPLEMENTIEREN. ANDERE + BUTTON KLASSENAUFGABE → 20 MINUTEN**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8d95420c-42bb-4e63-bbae-0a6d00202790/Untitled.jpeg)

1. Generate apiClient.ts

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46544d0a-df24-44d0-94f4-98d774707843/Untitled.jpeg)

1. Get category  information from API through API-Client

```css
https://opentdb.com/api_category.php
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/140da29b-bb24-4007-93c3-8ead3ad464d1/Untitled.jpeg)

1. Implement useState und useEffect for categories (erklären wie man setAllCategories richtig implementiert mit console.log(allCategories)

```tsx
	export const TriviaCard = () => {
	const [allCategories, setAllCategories] = useState<[]>();
	
	useEffect(() => {
	  const getAllCategories = async () => {
	    const categoriesResponse = await apiClient.get(`api_category.php`);
	    if (categoriesResponse.status === 200) {
	      setAllCategories(categoriesResponse.data.trivia_categories);
	    } else {
	      console.log(
	        "There has been a problem retrieving, check the network tab"
	      );
	    }
	  };
	  getAllCategories();
	}, [setAllCategories]);

	console.log(allCategories)
```

1. allCategories mappen und im select implementieren

```tsx
<FormControl sx={{ width: "100%", marginTop: "25px" }}>
  <InputLabel id="demo-simple-select-helper-label">
    Category
  </InputLabel>
  <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    label="Category"
  >
    {allCategories &&
      allCategories.map(
        (category: { id: number; name: string }) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        )
      )}
  </Select>
</FormControl>export const TriviaCard = () => {
  const [allCategories, setAllCategories] = useState<[]>();

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesResponse = await apiClient.get(`api_category.php`);
      if (categoriesResponse.status === 200) {
        setAllCategories(categoriesResponse.data.trivia_categories);
      } else {
        console.log(
          "There has been a problem retrieving, check the network tab"
        );
      }
    };
    getAllCategories();
  }, [setAllCategories]);
```

1. utils.ts und utilUtils für Difficulty und Type erstellen

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/638f6b03-7a20-464c-bc9f-93f444ee90d4/Untitled.jpeg)

1. i18next erklären und installieren über npm:

```tsx
npm i i18next react-i18next
```

1. Implement i18next

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20de9972-d7f6-40ea-a9a0-905f6ed0f0db/Untitled.jpeg)

```tsx
config.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en.json";

export const resources = {
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  interpolation: { escapeValue: false },
  resources,
});

export default i18n;
```

```tsx
react-i18next.d.ts

import "react-i18next";
import en from "../translations/en.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
```

```tsx
App.tsx

import '../common/i18n/config';
```

```tsx
en.json

{
    "card": {
        "combination": " Pick out a combination to generate trivia cards",
        "category": "Category",
        "difficulty": "Difficulty",
        "type": "Type",
        "generate": "Generate Trivia Cards",
        "difficulties": {
            "any": "Any Difficulty",
            "easy": "Easy",
            "medium": "Medium",
            "hard": "Hard"
        },
        "types": {
            "any": "Any Type",
            "multiple": "Multiple Choicee",
            "boolean": "True / False"
        }
    }
}
```

1. Adjust strings to react i18next in trivia-card.tsx

```tsx

 <Card sx={{ minWidth: "700px", marginTop: "50px" }}>
  <CardContent>
    <Typography
      sx={{
        marginTop: "15px",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      {t("card.combination")}
    </Typography>
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="number-of-questions"
          label="Number"
          fullWidth
          type="number"
          sx={{ marginTop: "25px" }}
        />
        <FormControl sx={{ width: "100%", marginTop: "25px" }}>
          <InputLabel id="demo-simple-select-helper-label">
            {t("card.category")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Category"
          >
            {allCategories &&
              allCategories.map(
                (category: { id: number; name: string }) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                )
              )}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%", marginTop: "25px" }}>
          <InputLabel id="demo-simple-select-helper-label">
            {t("card.difficulty")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Difficulty"
          ></Select>
        </FormControl>
        <FormControl sx={{ width: "100%", marginTop: "25px" }}>
          <InputLabel id="demo-simple-select-helper-label">
            {t("card.type")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Type"
          ></Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            height: "56px",
            paddingX: "30px",
            marginTop: "25px",
            marginBottom: "10px",
            background: teal[900],
          }}
					type="submit"
        >
          {t("card.generate")}
        </Button>
      </Box>
    </form>
  </CardContent>
</Card>

```

1. Implement difficulties and type thanks to map & translation

```tsx
<FormControl sx={{ width: "100%", marginTop: "25px" }}>
  <InputLabel id="demo-simple-select-helper-label">
    {t("card.difficulty")}
  </InputLabel>
  <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    label="Difficulty"
  >
    {Globals.difficulties.map((difficulty) => (
      <MenuItem key={difficulty} value={difficulty}>
        {/* @ts-expect-error Translation keys only exist during runtime */}
        {t(`card.difficulties.${difficulty}`)}
      </MenuItem>
    ))}
  </Select>
</FormControl>
<FormControl sx={{ width: "100%", marginTop: "25px" }}>
  <InputLabel id="demo-simple-select-helper-label">
    {t("card.type")}
  </InputLabel>
  <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    label="Type"
  >
    {Globals.types.map((type) => (
      <MenuItem key={type} value={type}>
        {/* @ts-expect-error Translation keys only exist during runtime */}
        {t(`card.types.${type}`)}
      </MenuItem>
    ))}
  </Select>
</FormControl>
```

1. Implement states, value, onChange and handleSubmit

```tsx
trivia-card.tsx

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "../../data/api-client";
import { Globals } from "../../utils/utils";

export const TriviaCard = () => {
  const { t } = useTranslation();
  const [allCategories, setAllCategories] = useState<[]>();
  const [selectedNumber, setSelectedNumber] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [triviaQuestions, setTriviaQuestions] = useState<any>();

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesResponse = await apiClient.get(`api_category.php`);
      if (categoriesResponse.status === 200) {
        setAllCategories(categoriesResponse.data.trivia_categories);
      } else {
        console.log(
          "There has been a problem retrieving, check the network tab"
        );
      }
    };
    getAllCategories();
  }, [setAllCategories]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const apiResponse = await apiClient.get(
      `api.php?amount=${selectedNumber}${
        selectedCategory !== "" ? `&category=${selectedCategory}` : ""
      }${
        selectedDifficulty !== "" && selectedDifficulty !== "any"
          ? `&difficulty=${selectedDifficulty}`
          : ""
      }${
        selectedType !== "" && selectedType !== "any"
          ? `&type=${selectedType}`
          : ""
      }`
    );

    setTriviaQuestions(apiResponse);
  };

  return (
    <Card sx={{ minWidth: "700px", marginTop: "50px", paddingX: "20px" }}>
      <CardContent>
        <Typography
          sx={{
            marginTop: "15px",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          {t("card.combination")}
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="number-of-questions"
              label="Number"
              fullWidth
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[1-20]*" }}
              value={selectedNumber}
              onChange={(e) => {
                setSelectedNumber(Number(e.target.value));
              }}
              sx={{ marginTop: "25px" }}
            />
            <FormControl sx={{ width: "100%", marginTop: "25px" }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("card.category")}
              </InputLabel>
              <Select
                labelId="category-label"
                id="category"
                label="Category"
                value={selectedCategory}
                onChange={(event: SelectChangeEvent) => {
                  setSelectedCategory(event.target.value as string);
                }}
              >
                {allCategories &&
                  allCategories.map(
                    (category: { id: number; name: string }) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    )
                  )}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%", marginTop: "25px" }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("card.difficulty")}
              </InputLabel>
              <Select
                labelId="difficulty-label"
                id="difficulty"
                label="Difficulty"
                value={selectedDifficulty}
                onChange={(event: SelectChangeEvent) => {
                  setSelectedDifficulty(event.target.value as string);
                }}
              >
                {Globals.difficulties.map((difficulty) => (
                  <MenuItem key={difficulty} value={difficulty}>
                    {/* @ts-expect-error Translation keys only exist during runtime */}
                    {t(`card.difficulties.${difficulty}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%", marginTop: "25px" }}>
              <InputLabel id="demo-simple-select-helper-label">
                {t("card.type")}
              </InputLabel>
              <Select
                labelId="type-label"
                id="type"
                label="Type"
                value={selectedType}
                onChange={(event: SelectChangeEvent) => {
                  setSelectedType(event.target.value as string);
                }}
              >
                {Globals.types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {/* @ts-expect-error Translation keys only exist during runtime */}
                    {t(`card.types.${type}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                height: "56px",
                paddingX: "30px",
                marginTop: "25px",
                marginBottom: "10px",
                background: teal[900],
              }}
              type="submit"
            >
              {t("card.generate")}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};
```

1. Es ist etwas übersichtlich. Select Dropdown mit normaler Funktion können zu einer reusable Komponente gemacht werden (difficulties und type):

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5dd818da-6c76-47f1-b0fa-63ec5d69a4b3/Untitled.jpeg)

```tsx
select-dropdown.tsx

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

type SelectDropdownProps = {
  inputLabelId: string;
  inputTranslation: string;
  labelId: string;
  id: string;
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  elements: string[];
  translationKey: string;
};

export const SelectDropdown = ({
  inputLabelId,
  inputTranslation,
  labelId,
  id,
  label,
  value,
  onChange,
  elements,
  translationKey,
}: SelectDropdownProps) => {
  const { t } = useTranslation();

  return (
    <FormControl sx={{ width: "100%", marginTop: "25px" }}>
      <InputLabel id={inputLabelId}>{inputTranslation}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      >
        {elements.map((element) => (
          <MenuItem key={element} value={element}>
            {/* @ts-expect-error Translation keys only exist during runtime */}
            {t(`card.${translationKey}.${element}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
```

```tsx
trivia-card.tsx

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "../../data/api-client";
import { Globals } from "../../utils/utils";
import { SelectDropdown } from "../common/select-dropdown";

export const TriviaCard = () => {
  const { t } = useTranslation();
  const [allCategories, setAllCategories] = useState<[]>();
  const [selectedNumber, setSelectedNumber] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [triviaQuestions, setTriviaQuestions] = useState<any>();

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesResponse = await apiClient.get(`api_category.php`);
      if (categoriesResponse.status === 200) {
        setAllCategories(categoriesResponse.data.trivia_categories);
      } else {
        console.log(
          "There has been a problem retrieving, check the network tab"
        );
      }
    };
    getAllCategories();
  }, [setAllCategories]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const apiResponse = await apiClient.get(
      `api.php?amount=${selectedNumber}${
        selectedCategory !== "" ? `&category=${selectedCategory}` : ""
      }${
        selectedDifficulty !== "" && selectedDifficulty !== "any"
          ? `&difficulty=${selectedDifficulty}`
          : ""
      }${
        selectedType !== "" && selectedType !== "any"
          ? `&type=${selectedType}`
          : ""
      }`
    );

    setTriviaQuestions(apiResponse);
  };

  return (
		<>
			<Typography variant="h2">{t("home.welcome")}</Typography>
			<Card sx={{ minWidth: "700px", marginTop: "50px", paddingX: "20px" }}>
	      <CardContent>
	        <Typography
	          sx={{
	            marginTop: "15px",
	            fontWeight: "bold",
	            fontSize: "20px",
	            textAlign: "center",
	          }}
	        >
	          {t("card.combination")}
	        </Typography>
	        <form noValidate onSubmit={handleSubmit}>
	          <Box
	            sx={{
	              display: "flex",
	              flexDirection: "column",
	              alignItems: "center",
	            }}
	          >
	            <TextField
	              id="number-of-questions"
	              label="Number"
	              fullWidth
	              type="number"
	              inputProps={{ inputMode: "numeric", pattern: "[1-20]*" }}
	              value={selectedNumber}
	              onChange={(e) => {
	                setSelectedNumber(Number(e.target.value));
	              }}
	              sx={{ marginTop: "25px" }}
	            />
	            <FormControl sx={{ width: "100%", marginTop: "25px" }}>
	              <InputLabel id="category-input-label">
	                {t("card.category")}
	              </InputLabel>
	              <Select
	                labelId="category-label"
	                id="category"
	                label="Category"
	                value={selectedCategory}
	                onChange={(event: SelectChangeEvent) => {
	                  setSelectedCategory(event.target.value as string);
	                }}
	              >
	                {allCategories &&
	                  allCategories.map(
	                    (category: { id: number; name: string }) => (
	                      <MenuItem key={category.id} value={category.id}>
	                        {category.name}
	                      </MenuItem>
	                    )
	                  )}
	              </Select>
	            </FormControl>
	            <SelectDropdown
	              inputLabelId={"difficulty-input-label"}
	              inputTranslation={t("card.difficulty")}
	              labelId={"difficulty-label"}
	              id={"difficulty"}
	              label={"Difficulty"}
	              value={selectedDifficulty}
	              onChange={(event: SelectChangeEvent) => {
	                setSelectedDifficulty(event.target.value as string);
	              }}
	              elements={Globals.difficulties}
	              translationKey={"difficulties"}
	            />
	            <SelectDropdown
	              inputLabelId={"type-input-label"}
	              inputTranslation={t("card.type")}
	              labelId={"type-label"}
	              id={"type"}
	              label={"Type"}
	              value={selectedType}
	              onChange={(event: SelectChangeEvent) => {
	                setSelectedType(event.target.value as string);
	              }}
	              elements={Globals.types}
	              translationKey={"types"}
	            />
	            <Button
	              variant="contained"
	              sx={{
	                height: "56px",
	                paddingX: "30px",
	                marginTop: "25px",
	                marginBottom: "10px",
	                background: teal[900],
	              }}
	              type="submit"
	            >
	              {t("card.generate")}
	            </Button>
	          </Box>
	        </form>
	      </CardContent>
	    </Card>
		</>
  );
};
```

1. Damit wir conditional rendering von generieren zum anzeigen von den Karten machen können, muss der useState von TriviaQuestions in das Parent element verschoben werden

```tsx
App.tsx

function App() {
  const { t } = useTranslation();
  const [triviaQuestions, setTriviaQuestions] = useState<any>();

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          padding: "5rem",
          background: "#232323",
          height: "100vh",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">{t("home.welcome")}</Typography>
          <TriviaCard setTriviaQuestions={setTriviaQuestions} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

```tsx
trivia-card.tsx

type TriviaCardProps = {
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaCard = ({ setTriviaQuestions }: TriviaCardProps) => {
  const { t } = useTranslation();
  const [allCategories, setAllCategories] = useState<[]>();
  const [selectedNumber, setSelectedNumber] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedType, setSelectedType] = useState("");

```

1. Neue trivia-questions.tsx Komponente erstellen. 
Conditional rendering in App.tsx implementieren if triviaQuestions === undefined. Button für reset State auch aktivieren um neue Fragen zu generieren

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee631ee2-36e1-44fd-b978-59752a3f7db7/Untitled.jpeg)

```tsx
trivia-questions.tsx

import { Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

type TriviaQuestionsProps = {
  triviaQuestions: any;
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaQuestions = ({
  triviaQuestions,
  setTriviaQuestions,
}: TriviaQuestionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "56px",
          paddingX: "30px",
          background: teal[900],
        }}
        onClick={() => {
          setTriviaQuestions(undefined);
        }}
      >
        {t("triviaQuestions.generateNew")}
      </Button>
      <Typography variant="h2" sx={{ marginTop: "25px", marginBottom: "25px" }}>
        {t("triviaQuestions.pickCard")}
      </Typography>
      <Box></Box>
    </>
  );
};
```

```tsx
App.tsx

import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { TriviaCard } from "./common/components/card/trivia-card";
import { TriviaQuestions } from "./common/components/trivia-questions/trivia-questions";
import "./common/i18n/config";
import "./styles/App.css";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    desktop: true; // enables desktop breakpoint
    uhd: true;
    kuhd: true;
  }
}

const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
      desktop: 1920,
      uhd: 2560,
      kuhd: 3540,
    },
  },
});

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState<any>();

  console.log(triviaQuestions);

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          padding: "5rem",
          background: "#232323",
          height: "100vh",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {triviaQuestions === undefined ? (
            <TriviaCard setTriviaQuestions={setTriviaQuestions} />
          ) : (
            <TriviaQuestions
              triviaQuestions={triviaQuestions}
              setTriviaQuestions={setTriviaQuestions}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

1. Grid-Box für fragen erstellen

```tsx
trivia-questions.tsx

import { Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

type TriviaQuestionsProps = {
  triviaQuestions: any;
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaQuestions = ({
  triviaQuestions,
  setTriviaQuestions,
}: TriviaQuestionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "56px",
          paddingX: "30px",
          background: teal[900],
        }}
        onClick={() => {
          setTriviaQuestions(undefined);
        }}
      >
        {t("triviaQuestions.generateNew")}
      </Button>
      <Typography variant="h2" sx={{ marginTop: "25px", marginBottom: "25px" }}>
        {t("triviaQuestions.pickCard")}
      </Typography>
      <Box className="grid-container"></Box>
    </>
  );
};
```

```css
App.css

html,
a {
  color: inherit;
  text-decoration: none;
}

* {
  margin: 0;
  padding: 0;
}
*,
::after,
::before {
  box-sizing: border-box;
}

* {
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

.grid-container {
  display: grid !important;
  width: 100%;
  gap: 10px !important;
  grid-template-columns: repeat(auto-fit, 110px) !important;
  justify-content: center;
  flex-flow: nowrap !important;
}
```

1. trivia-question-cards.tsx erstellen und mit Hilfe von map in trivia-questions.tsx einfügen. Neues interface in types.ts erstellen damit die Axiosresponse richtig implementiert werden kann.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/909a566b-4d28-4a39-a93c-50204db334e4/Untitled.jpeg)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e06b6dae-bd9e-4955-b67d-ba02c9fb6557/Untitled.jpeg)

```tsx
types.ts 

export interface TriviaQuestion {
  data: {};
}
```

```tsx
App.tsx - Verbesserung useState

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion>();

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          padding: "5rem",
          background: "#232323",
          height: "100vh",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {triviaQuestions === undefined ? (
            <TriviaCard setTriviaQuestions={setTriviaQuestions} />
          ) : (
            <TriviaQuestions
              triviaQuestions={triviaQuestions.data}
              setTriviaQuestions={setTriviaQuestions}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

```tsx
trivia-question-cards.tsx

import { Grid } from "@mui/material";

type TriviaQuestionsCardProp = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const TriviaQuestionsCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}: TriviaQuestionsCardProp) => {
  console.log(category);
  console.log(question);
  console.log(correctAnswer);
  console.log(incorrectAnswers);

  return (
    <>
      <Grid
        item
        boxShadow="none"
        borderRadius="10px"
        justifyContent="center"
      ></Grid>
    </>
  );
};
```

```tsx
trivia-questions.tsx

import { Box, Button, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { TriviaQuestionsCard } from "./trivia-querstions-card";

type TriviaQuestionsProps = {
  triviaQuestions: any;
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaQuestions = ({
  triviaQuestions,
  setTriviaQuestions,
}: TriviaQuestionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "56px",
          paddingX: "30px",
          background: teal[900],
        }}
        onClick={() => {
          setTriviaQuestions(undefined);
        }}
      >
        {t("triviaQuestions.generateNew")}
      </Button>
      <Typography variant="h2" sx={{ marginTop: "25px", marginBottom: "25px" }}>
        {t("triviaQuestions.pickCard")}
      </Typography>
      <Box className="grid-container">
        {triviaQuestions.results.map(
          (triviaQuestion: {
            category: string;
            question: string;
            correct_answer: string;
            incorrect_answers: [];
          }) => (
            <TriviaQuestionsCard
              key={triviaQuestion.correct_answer}
              category={triviaQuestion.category}
              question={triviaQuestion.question}
              correctAnswer={triviaQuestion.correct_answer}
              incorrectAnswers={triviaQuestion.incorrect_answers}
            />
          )
        )}
      </Box>
    </>
  );
};
```

1. Grid in trivia-qustions-card.tsx

```tsx
trivia-questions-card.tsx

import { Grid, Typography } from "@mui/material";

type TriviaQuestionsCardProp = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const TriviaQuestionsCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}: TriviaQuestionsCardProp) => {
  console.log(question);
  console.log(correctAnswer);
  console.log(incorrectAnswers);

  return (
    <>
      <Grid
        item
        boxShadow="none"
        borderRadius="10px"
        sx={{
          background: "#fff",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "240px",
          paddingX: "25px",
					border: "none"
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
          {category}
        </Typography>
      </Grid>
    </>
  );
};
```

1. Implement generate random colors

```tsx
trivia-questions-card.tsx

import { Grid, Typography } from "@mui/material";

type TriviaQuestionsCardProp = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const TriviaQuestionsCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}: TriviaQuestionsCardProp) => {
  console.log(correctAnswer);
  console.log(incorrectAnswers);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <>
      <Grid
        item
        boxShadow="none"
        borderRadius="10px"
        sx={{
          background: "#fff",
          color: `#${randomColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "240px",
          paddingX: "25px",
        }}
        component="button"
        onClick={() => {
          console.log(question);
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            textShadow: "0 0 2px #d2d2d2",
            letterSpacing: "3px",
          }}
        >
          {category}
        </Typography>
      </Grid>
    </>
  );
};
```

1. Create ModalComponent, Implement onClick on Card and openModal

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac3313e9-ebae-42e8-9ef3-47b6f3db6a6c/Untitled.jpeg)

```tsx
modal-component.tsx

import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

type ModalComponentProps = {
  open: boolean;
  handleClose: () => void;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const ModalComponent = ({
  open,
  handleClose,
  question,
  correctAnswer,
  incorrectAnswers,
}: ModalComponentProps) => {
  return (
    <Modal
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          background: "#fff",
          width: "50%",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography id="modal-title" fontWeight={"bold"} fontSize={"25px"}>
          Question
        </Typography>
        <Typography fontSize={"18px"}>{question}</Typography>
      </Box>
    </Modal>
  );
};
```

```tsx
trivia-questions-card.tsx

import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ModalComponent } from "../common/modal-component";

type TriviaQuestionsCardProp = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [];
};

export const TriviaQuestionsCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}: TriviaQuestionsCardProp) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <>
      <Grid
        item
        boxShadow="none"
        borderRadius="10px"
        sx={{
          background: "#fff",
          color: `#${randomColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "240px",
          paddingX: "25px",
        }}
        component="button"
        onClick={handleOpen}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            textShadow: "0 0 2px #d2d2d2",
            letterSpacing: "3px",
          }}
        >
          {category}
        </Typography>
      </Grid>
      {open === false ? (
        <></>
      ) : (
        <ModalComponent
          open={open}
          handleClose={handleClose}
          question={question}
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </>
  );
};
```

1. Decode special html characters

```tsx
npm i html-react-parser
```

```tsx
trivia-questions.tsx

import parse from "html-react-parser";

...
<Typography sx={{ fontSize: "18px", marginTop: "10px" }}>
  {parse(question)}
</Typography>
...
```

1. Gather all answers in one array in modal-component.tsx inside a useEffect so it doesn’t create too many rerenders. Fix incorrectAnswers type.
Create new reusable question-card.tsx component:

```tsx
modal-component.tsx

...

type ModalComponentProps = {
  open: boolean;
  handleClose: () => void;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

export const ModalComponent = ({
  open,
  handleClose,
  question,
  correctAnswer,
  incorrectAnswers,
}: ModalComponentProps) => {
  const [allAnswers, setAllAnswers] = useState(incorrectAnswers);

  useEffect(() => {
    const gatherAllAnswers = () => {
      setAllAnswers([...allAnswers, correctAnswer]);
    };
    gatherAllAnswers();
  }, [setAllAnswers]);

  console.log(allAnswers);
...
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d11d58d-d12b-4245-9431-51874f5c37e1/Untitled.jpeg)

```tsx
question-card.tsx

import { Card, CardContent, Typography } from "@mui/material";
import parse from "html-react-parser";

type QuestionCardProps = {
  answer: string;
};

export const QuestionCard = ({ answer }: QuestionCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{parse(answer)}</Typography>
      </CardContent>
    </Card>
  );
};
```

```tsx
modal-component.tsx

...
<Box
  sx={{
    background: "#fff",
    width: "50%",
    borderRadius: "10px",
    padding: "30px",
  }}
>
  <Typography id="modal-title" fontWeight={"bold"} fontSize={"25px"}>
    Question
  </Typography>
  <Typography sx={{ fontSize: "18px", marginTop: "10px" }}>
    {parse(question)}
  </Typography>
  <Box className="grid-question-container">
    {allAnswers.map((answer) => (
      <QuestionCard key={answer} answer={answer} />
    ))}
  </Box>
</Box>
...
```

```css
App.css

.grid-question-container {
  display: grid !important;
  width: 100%;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
  margin-bottom: 25px;
}
```

```tsx
question-card.tsx

import { Card, CardContent, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import parse from "html-react-parser";

type QuestionCardProps = {
  answer: string;
};

export const QuestionCard = ({ answer }: QuestionCardProps) => {
  return (
    <Card
      sx={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        background: teal[900],
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        border: "none",
      }}
      component="button"
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
          {parse(answer)}
        </Typography>
      </CardContent>
    </Card>
  );
};
```

1. Implement answer Check, prop correct answer to question-card.tsx
```
question-card.tsx

type QuestionCardProps = {
  answer: string;
  correctAnswer: string;
	setCheckAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setRightAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const QuestionCard = ({ answer, correctAnswer, setCheckAnswer,
  setRightAnswer, }: QuestionCardProps) => {
  return (
    <Card
...
```
```
modal-component.tsx

...

export const ModalComponent = ({
  open,
  handleClose,
  question,
  correctAnswer,
  incorrectAnswers,
}: ModalComponentProps) => {
  const { t } = useTranslation();
  const [allAnswers, setAllAnswers] = useState(incorrectAnswers);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);

  useEffect(() => {
    const gatherAllAnswers = () => {
      setAllAnswers([...allAnswers, correctAnswer]);
    };
    gatherAllAnswers();
  }, [setAllAnswers]);

  return (
    <Modal
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          background: "#fff",
          width: "50%",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography id="modal-title" fontWeight={"bold"} fontSize={"25px"}>
          {t("triviaQuestions.question")}
        </Typography>
        <Typography sx={{ fontSize: "18px", marginTop: "10px" }}>
          {parse(question)}
        </Typography>
        <Box className="grid-question-container">
          {allAnswers.map((answer) => (
            <QuestionCard
              key={answer}
              answer={answer}
              correctAnswer={correctAnswer}
              setCheckAnswer={setCheckAnswer}
              setRightAnswer={setRightAnswer}
            />
          ))}
        </Box>
        {checkAnswer === false ? (
          <></>
        ) : (
          <Box sx={{ marginTop: "40px", width: "100%", textAlign: "center" }}>
            {rightAnswer === true ? (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: green[800] }}
              >
                {t("triviaQuestions.wrong")}
              </Typography>
            ) : (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: red[800] }}
              >
                {t("triviaQuestions.correct")}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
};
```
