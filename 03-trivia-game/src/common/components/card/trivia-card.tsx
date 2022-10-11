import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "../../data/api-client";
import { Globals } from "../../utils/utils";

export const TriviaCard = () => {
  const [allCategories, setAllCategories] = useState<[]>();
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
          <form>
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
                sx={{ marginTop: "25px" }}
              />
              <FormControl fullWidth sx={{ marginTop: "25px" }}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select labelId="category-label" id="category" label="Category">
                  {allCategories &&
                    allCategories.map(
                      (category: { id: number; name: string }) => (
                        <MenuItem key={category.id} value={category.name}>
                          {category.name}
                        </MenuItem>
                      )
                    )}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: "25px" }}>
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                <Select
                  labelId="difficulty-label"
                  id="difficulty"
                  label="Difficulty"
                >
                  {Globals.difficulties.map((difficulty: string) => (
                    <MenuItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: "25px" }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select labelId="type-label" id="type" label="Type">
                  {Globals.types.map((type: string) => (
                    <MenuItem key={type} value={type}>
                      {type}
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
