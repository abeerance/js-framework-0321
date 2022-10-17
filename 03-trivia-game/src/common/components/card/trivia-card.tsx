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
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "../../data/api-client";
import { Globals } from "../../utils/utils";
import { SelectDropdown } from "../common/select-dropdown";

type TriviaCardProps = {
  setTriviaQuestions: React.Dispatch<React.SetStateAction<any>>;
};

export const TriviaCard = ({ setTriviaQuestions }: TriviaCardProps) => {
  const [allCategories, setAllCategories] = useState<[]>();
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesResponse = await apiClient.get(`api_category.php`);
      if (categoriesResponse.status === 200) {
        setAllCategories(categoriesResponse.data.trivia_categories);
      } else {
        console.log("API Call was unsuccesful");
      }
    };
    getAllCategories();
  }, [setAllCategories]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const apiResponse = await apiClient.get(
      `api.php?amount=${selectedNumberOfQuestions}${
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
          <form noValidate onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingX: "15px",
              }}
            >
              <TextField
                id="number-of-questions"
                label="Number"
                fullWidth
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "{1, 20}" }}
                value={selectedNumberOfQuestions}
                onChange={(e) => {
                  setSelectedNumberOfQuestions(Number(e.target.value));
                }}
                sx={{ marginTop: "25px" }}
              />
              <FormControl fullWidth sx={{ marginTop: "25px" }}>
                <InputLabel id="category-label">
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
