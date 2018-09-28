<?php 
	abstract class BridgePaella {
		private $type;
		private $ingredientes;

		function __construct($_type, $_ingredientes) {
			$this->type = $_type;
			
			if($type == "Mariscos") {
				$fun = 'paellaMariscos';

			} elseif ($type == "Vegetariana") {
				$fun = 'paellaVegetariana';

			} elseif ($type == "CarnePollo") {
				$fun = 'paellaCarnePollo';

			}

			$this->ingredientes = $fun();
		}

		function paellaMariscos() {
			$ingredientesMariscos = array("calamares", "mejillones", "tomate", "camarones");

		}

		function paellaVegetariana() {
			$ingredientesVegetariana = array("tomate", "albahaca", "berenjena");
		}

		function paellaCarnePollo () {
			$ingredientesCarnePollo = array("pernil de pollo", "carne de res desmechada");
		}

		function showType() {
			return $this->type;
		}

		function showIngredientes() {
			$temp = count($this->ingredientes);
			$string = "";
			for($i = 0; $i <= $temp; $i++) {
				$string .= $this->ingredientes[i] . ",";
			}

			return $string;
		}
	}

	class BridgeTypeIngredients extends BridgePaella {
		function showType_Ingredientes() {
			return "Tipo: " . $this->showType() . ", ingredientes: " . $this->showIngredientes();
		}
	}

	class BridgeIngredientesType extends BridgePaella {
		function showIngredientes_Type() {
			return "Ingredientes: " . $this->showIngredientes() . ", tipo: " . $this->showType();
		}
	}
?>