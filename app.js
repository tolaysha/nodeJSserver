var express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')
var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function (req, res) {
  res.send({response:123});
});
app.get('/about', function (req, res) {
  res.send(`{
    "modelTopology": {
      "class_name": "Model",
      "config": {
        "name": "model2",
        "layers": [{
          "name": "input_1",
          "class_name": "InputLayer",
          "config": {
            "batch_input_shape": [null, 224, 224, 3],
            "dtype": "float32",
            "sparse": false,
            "name": "input_1"
          },
          "inbound_nodes": []
        }, {
          "name": "conv1",
          "class_name": "Conv2D",
          "config": {
            "filters": 8,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [3, 3],
            "strides": [2, 2],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv1",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["input_1", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv1_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv1_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv1", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv1_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv1_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv1_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_1",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_1",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv1_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_1_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_1_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_1", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_1_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_1_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_1_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_1",
          "class_name": "Conv2D",
          "config": {
            "filters": 16,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_1",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_1_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_1_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_1_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_1", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_1_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_1_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_1_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_2",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [2, 2],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_2",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_1_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_2_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_2_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_2", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_2_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_2_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_2_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_2",
          "class_name": "Conv2D",
          "config": {
            "filters": 32,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_2",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_2_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_2_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_2_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_2", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_2_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_2_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_2_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_3",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_3",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_2_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_3_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_3_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_3", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_3_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_3_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_3_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_3",
          "class_name": "Conv2D",
          "config": {
            "filters": 32,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_3",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_3_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_3_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_3_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_3", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_3_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_3_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_3_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_4",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [2, 2],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_4",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_3_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_4_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_4_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_4", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_4_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_4_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_4_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_4",
          "class_name": "Conv2D",
          "config": {
            "filters": 64,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_4",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_4_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_4_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_4_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_4", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_4_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_4_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_4_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_5",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_5",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_4_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_5_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_5_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_5", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_5_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_5_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_5_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_5",
          "class_name": "Conv2D",
          "config": {
            "filters": 64,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_5",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_5_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_5_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_5_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_5", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_5_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_5_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_5_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_6",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [2, 2],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_6",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_5_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_6_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_6_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_6", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_6_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_6_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_6_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_6",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_6",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_6_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_6_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_6_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_6", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_6_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_6_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_6_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_7",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_7",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_6_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_7_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_7_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_7", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_7_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_7_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_7_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_7",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_7",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_7_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_7_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_7_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_7", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_7_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_7_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_7_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_8",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_8",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_7_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_8_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_8_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_8", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_8_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_8_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_8_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_8",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_8",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_8_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_8_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_8_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_8", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_8_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_8_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_pw_8_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_9",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_9",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_8_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_9_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_9_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_9", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_9_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_9_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_9_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_9",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_9",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_dw_9_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_9_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_9_bn",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_9", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_9_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_9_relu",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_9_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_10",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_10",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_9_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_10_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_10_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_10", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_10_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_10_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_10_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_10",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_10",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_dw_10_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_10_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_10_bn",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_10", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_10_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_10_relu",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_10_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_11",
          "class_name": "DepthwiseConv2D",
          "config": {
            "kernel_size": [3, 3],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_dw_11",
            "trainable": false,
            "depth_multiplier": 1,
            "depthwise_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "depthwise_regularizer": null,
            "depthwise_constraint": null
          },
          "inbound_nodes": [
            [
              ["conv_pw_10_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_11_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_dw_11_bn",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_11", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_dw_11_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_dw_11_relu",
            "trainable": false
          },
          "inbound_nodes": [
            [
              ["conv_dw_11_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_11",
          "class_name": "Conv2D",
          "config": {
            "filters": 128,
            "kernel_initializer": {
              "class_name": "VarianceScaling",
              "config": {
                "scale": 1,
                "mode": "fan_avg",
                "distribution": "uniform",
                "seed": null
              }
            },
            "kernel_regularizer": null,
            "kernel_constraint": null,
            "kernel_size": [1, 1],
            "strides": [1, 1],
            "padding": "same",
            "data_format": "channels_last",
            "dilation_rate": [1, 1],
            "activation": "linear",
            "use_bias": false,
            "bias_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "bias_regularizer": null,
            "activity_regularizer": null,
            "bias_constraint": null,
            "name": "conv_pw_11",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_dw_11_relu", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_11_bn",
          "class_name": "BatchNormalization",
          "config": {
            "axis": -1,
            "momentum": 0.99,
            "epsilon": 0.001,
            "center": true,
            "scale": true,
            "beta_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "gamma_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "moving_mean_initializer": {
              "class_name": "Zeros",
              "config": {}
            },
            "moving_variance_initializer": {
              "class_name": "Ones",
              "config": {}
            },
            "beta_regularizer": null,
            "gamma_regularizer": null,
            "beta_constraint": null,
            "gamma_constraint": null,
            "name": "conv_pw_11_bn",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_11", 0, 0, {}]
            ]
          ]
        }, {
          "name": "conv_pw_11_relu",
          "class_name": "Activation",
          "config": {
            "activation": "relu6",
            "name": "conv_pw_11_relu",
            "trainable": true
          },
          "inbound_nodes": [
            [
              ["conv_pw_11_bn", 0, 0, {}]
            ]
          ]
        }, {
          "name": "sequential_1",
          "class_name": "Sequential",
          "config": [{
            "class_name": "Flatten",
            "config": {
              "name": "flatten_Flatten1",
              "trainable": true,
              "batch_input_shape": [null, 14, 14, 128],
              "dtype": "float32"
            }
          }, {
            "class_name": "Dense",
            "config": {
              "units": 200,
              "activation": "relu",
              "use_bias": true,
              "kernel_initializer": {
                "class_name": "VarianceScaling",
                "config": {
                  "scale": 1,
                  "mode": "fan_avg",
                  "distribution": "normal",
                  "seed": null
                }
              },
              "bias_initializer": {
                "class_name": "Zeros",
                "config": {}
              },
              "kernel_regularizer": null,
              "bias_regularizer": null,
              "activity_regularizer": null,
              "kernel_constraint": null,
              "bias_constraint": null,
              "name": "dense_Dense1",
              "trainable": true
            }
          }, {
            "class_name": "Dense",
            "config": {
              "units": 5,
              "activation": "linear",
              "use_bias": true,
              "kernel_initializer": {
                "class_name": "VarianceScaling",
                "config": {
                  "scale": 1,
                  "mode": "fan_avg",
                  "distribution": "normal",
                  "seed": null
                }
              },
              "bias_initializer": {
                "class_name": "Zeros",
                "config": {}
              },
              "kernel_regularizer": null,
              "bias_regularizer": null,
              "activity_regularizer": null,
              "kernel_constraint": null,
              "bias_constraint": null,
              "name": "dense_Dense2",
              "trainable": true
            }
          }],
          "inbound_nodes": [
            [
              ["conv_pw_11_relu", 0, 0, {}]
            ]
          ]
        }],
        "input_layers": [
          ["input_1", 0, 0]
        ],
        "output_layers": [
          ["sequential_1", 1, 0]
        ]
      },
      "keras_version": "tfjs-layers 0.9.2",
      "backend": "tensor_flow.js"
    },
    "weightsManifest": [{
      "paths": ["weights.bin"],
      "weights": [{
        "name": "conv_pw_9/kernel",
        "shape": [1, 1, 128, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_9_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_9_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_10/kernel",
        "shape": [1, 1, 128, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_10_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_10_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_11/kernel",
        "shape": [1, 1, 128, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_11_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_11_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "dense_Dense1/kernel",
        "shape": [25088, 200],
        "dtype": "float32"
      }, {
        "name": "dense_Dense1/bias",
        "shape": [200],
        "dtype": "float32"
      }, {
        "name": "dense_Dense2/kernel",
        "shape": [200, 5],
        "dtype": "float32"
      }, {
        "name": "dense_Dense2/bias",
        "shape": [5],
        "dtype": "float32"
      }, {
        "name": "conv1/kernel",
        "shape": [3, 3, 3, 8],
        "dtype": "float32"
      }, {
        "name": "conv1_bn/gamma",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv1_bn/beta",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv1_bn/moving_mean",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv1_bn/moving_variance",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv_dw_1/depthwise_kernel",
        "shape": [3, 3, 8, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_1_bn/gamma",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv_dw_1_bn/beta",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv_dw_1_bn/moving_mean",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv_dw_1_bn/moving_variance",
        "shape": [8],
        "dtype": "float32"
      }, {
        "name": "conv_pw_1/kernel",
        "shape": [1, 1, 8, 16],
        "dtype": "float32"
      }, {
        "name": "conv_pw_1_bn/gamma",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_pw_1_bn/beta",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_pw_1_bn/moving_mean",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_pw_1_bn/moving_variance",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_dw_2/depthwise_kernel",
        "shape": [3, 3, 16, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_2_bn/gamma",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_dw_2_bn/beta",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_dw_2_bn/moving_mean",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_dw_2_bn/moving_variance",
        "shape": [16],
        "dtype": "float32"
      }, {
        "name": "conv_pw_2/kernel",
        "shape": [1, 1, 16, 32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_2_bn/gamma",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_2_bn/beta",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_2_bn/moving_mean",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_2_bn/moving_variance",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_3/depthwise_kernel",
        "shape": [3, 3, 32, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_3_bn/gamma",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_3_bn/beta",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_3_bn/moving_mean",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_3_bn/moving_variance",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_3/kernel",
        "shape": [1, 1, 32, 32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_3_bn/gamma",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_3_bn/beta",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_3_bn/moving_mean",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_3_bn/moving_variance",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_4/depthwise_kernel",
        "shape": [3, 3, 32, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_4_bn/gamma",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_4_bn/beta",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_4_bn/moving_mean",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_dw_4_bn/moving_variance",
        "shape": [32],
        "dtype": "float32"
      }, {
        "name": "conv_pw_4/kernel",
        "shape": [1, 1, 32, 64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_4_bn/gamma",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_4_bn/beta",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_4_bn/moving_mean",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_4_bn/moving_variance",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_5/depthwise_kernel",
        "shape": [3, 3, 64, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_5_bn/gamma",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_5_bn/beta",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_5_bn/moving_mean",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_5_bn/moving_variance",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_5/kernel",
        "shape": [1, 1, 64, 64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_5_bn/gamma",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_5_bn/beta",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_5_bn/moving_mean",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_5_bn/moving_variance",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_6/depthwise_kernel",
        "shape": [3, 3, 64, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_6_bn/gamma",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_6_bn/beta",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_6_bn/moving_mean",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_dw_6_bn/moving_variance",
        "shape": [64],
        "dtype": "float32"
      }, {
        "name": "conv_pw_6/kernel",
        "shape": [1, 1, 64, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_6_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_6_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_6_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_6_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_7/depthwise_kernel",
        "shape": [3, 3, 128, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_7_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_7_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_7_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_7_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_7/kernel",
        "shape": [1, 1, 128, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_7_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_7_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_7_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_7_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_8/depthwise_kernel",
        "shape": [3, 3, 128, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_8_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_8_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_8_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_8_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_8/kernel",
        "shape": [1, 1, 128, 128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_8_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_8_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_8_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_8_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_9/depthwise_kernel",
        "shape": [3, 3, 128, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_9_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_9_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_9_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_9_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_9_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_9_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_10/depthwise_kernel",
        "shape": [3, 3, 128, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_10_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_10_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_10_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_10_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_10_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_10_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_11/depthwise_kernel",
        "shape": [3, 3, 128, 1],
        "dtype": "float32"
      }, {
        "name": "conv_dw_11_bn/gamma",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_11_bn/beta",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_11_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_dw_11_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_11_bn/moving_mean",
        "shape": [128],
        "dtype": "float32"
      }, {
        "name": "conv_pw_11_bn/moving_variance",
        "shape": [128],
        "dtype": "float32"
      }]
    }]
  }`);
});
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
app.post('/post', function (req, res) {
  console.log(req.body);
  console.log(res.body);
  
  res.send('POST request to the homepage');
});
app.post('/recognise',cors(corsOptions), function (req, res) {
  console.log(req.body);
  console.log(res.body);
  setTimeout(
    ()=>res.send({'email':'topaluyser@mlai.com','number':'89153447594','name':'Petr','surname':'Petrov'}),
    0
  )
  
});


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});