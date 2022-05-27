(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{488:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"joining-testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#joining-testnet"}},[s._v("#")]),s._v(" Joining Testnet")]),s._v(" "),t("h2",{attrs:{id:"install-osmosis-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosis-binary"}},[s._v("#")]),s._v(" Install Osmosis Binary")]),s._v(" "),t("p",[s._v("Make sure you have "),t("a",{attrs:{href:"../cli/install#manual-installation"}},[s._v("installed the Osmosis Binary (CLI)")]),s._v(" prior to following the below instructions.")]),s._v(" "),t("p",[s._v("You may also "),t("a",{attrs:{href:"../cli/install#quick-start"}},[s._v("use the Osmosis installer")]),s._v(" if you want everything to be done automatically.")]),s._v(" "),t("h2",{attrs:{id:"faucet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faucet"}},[s._v("#")]),s._v(" Faucet")]),s._v(" "),t("p",[s._v("In order to get testnet tokens use  https://faucet.osmosis.zone/")]),s._v(" "),t("h2",{attrs:{id:"initialize-osmosis-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-osmosis-node"}},[s._v("#")]),s._v(" Initialize Osmosis Node")]),s._v(" "),t("p",[s._v("Use osmosisd to initialize your node (replace the "),t("code",[s._v("NODE_NAME")]),s._v(" with a name of your choosing):")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("osmosisd init NODE_NAME --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("osmo-test-4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Open the config.toml to edit the seeds and persistent peers:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" config.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v('Use page down or arrow keys to get to the line that says seeds = "" and replace it with the following:')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("seeds "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0f9a9c694c46bd28ad9ad6126e923993fc6c56b1@137.184.181.105:26656"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Next, add persistent peers:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("persistent_peers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4ab030b7fd75ed895c48bcc899b99c17a396736b@137.184.190.127:26656,3dbffa30baab16cc8597df02945dcee0aa0a4581@143.198.139.33:26656"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Then press "),t("code",[s._v("Ctrl+O")]),s._v(" then enter to save, then "),t("code",[s._v("Ctrl+X")]),s._v(" to exit")]),s._v(" "),t("h2",{attrs:{id:"set-up-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-cosmovisor"}},[s._v("#")]),s._v(" Set Up Cosmovisor")]),s._v(" "),t("p",[s._v("Set up cosmovisor to ensure future upgrades happen flawlessly. To install Cosmovisor:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Create the required directories:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/genesis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/genesis/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/upgrades\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("Set the environment variables:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# Setup Cosmovisor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_NAME=osmosisd"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_HOME='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.osmosisd"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_ALLOW_DOWNLOAD_BINARIES=false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_LOG_BUFFER_SIZE=512"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_RESTART_AFTER_UPGRADE=true"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export UNSAFE_SKIP_BACKUP=true"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("You may leave out "),t("code",[s._v("UNSAFE_SKIP_BACKUP=true")]),s._v(", however the backup takes a decent amount of time and public snapshots of old states are available.")]),s._v(" "),t("p",[s._v("Download and replace the genesis file:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xjf genesis.tar.bz2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" genesis.tar.bz2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Copy the current osmosisd binary into the cosmovisor/genesis folder:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/osmosisd ~/.osmosisd/cosmovisor/genesis/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To check your work, ensure the version of cosmovisor and osmosisd are the same:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cosmovisor version\nosmosisd version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("These two command should both output 7.0.3")]),s._v(" "),t("p",[s._v("Reset private validator file to genesis state:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("osmosisd unsafe-reset-all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"download-chain-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-chain-data"}},[s._v("#")]),s._v(" Download Chain Data")]),s._v(" "),t("p",[s._v("Download the latest chain data from a snapshot provider. In the following commands, I will use "),t("a",{attrs:{href:"https://quicksync.io/networks/osmosis.html",target:"_blank"}},[s._v("https://quicksync.io/networks/osmosis.html")]),s._v(" to download the chain data. You may choose the pruned or archive based on your needs.")]),s._v(" "),t("p",[s._v("Download liblz4-tool to handle the compressed file:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" liblz4-tool aria2 -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Download the chain data:")]),s._v(" "),t("ul",[t("li",[s._v("Select the tab to the desired node type (Pruned or Archive)")])]),s._v(" "),t("tabs",{attrs:{options:{useUrlFragment:!1}}},[t("tab",{attrs:{name:"Pruned"}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://quicksync.io/osmosis.json"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jq -r "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'.[] |select(.file=="osmotestnet-4-pruned")|select (.mirror=="Netherlands")|.url\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$URL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lz4 -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("tab",{attrs:{name:"Archive"}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://quicksync.io/osmosis.json"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jq -r "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'.[] |select(.file=="osmotestnet-4-archive")|select (.mirror=="Netherlands")|.url\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$URL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lz4 -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])],1),s._v(" "),t("h2",{attrs:{id:"set-up-osmosis-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-osmosis-service"}},[s._v("#")]),s._v(" Set Up Osmosis Service")]),s._v(" "),t("p",[s._v("Set up a service to allow cosmovisor to run in the background as well as restart automatically if it runs into any problems:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[Unit]\nDescription=Cosmovisor daemon\nAfter=network-online.target\n[Service]\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("osmosisd"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v("/.osmosisd"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_RESTART_AFTER_UPGRADE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_LOG_BUFFER_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UNSAFE_SKIP_BACKUP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nUser='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\nExecStart="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/go/bin/cosmovisor start\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\nLimitNPROC=infinity\n[Install]\nWantedBy=multi-user.target\n"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cosmovisor.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("Move this new file to the systemd directory:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cosmovisor.service /lib/systemd/system/cosmovisor.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"start-osmosis-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-osmosis-service"}},[s._v("#")]),s._v(" Start Osmosis Service")]),s._v(" "),t("p",[s._v("Reload and start the service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\nsystemctl restart systemd-journald\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start cosmovisor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Check the status of the service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status cosmovisor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To see live logs of the service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("journalctl -u cosmovisor -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"update-cosmovisor-to-v7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-cosmovisor-to-v7"}},[s._v("#")]),s._v(" Update Cosmovisor to V7")]),s._v(" "),t("p",[s._v("If you want osmosisd to upgrade automatically from V6 to V7, do the following steps prior to the upgrade height (3215657):")]),s._v(" "),t("p",[s._v("This step is only needed if syncing from genesis and haven't passed block 3215657 yet.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/upgrades/v7/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/osmosis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v7.0.3\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" build\nsystemctl stop cosmovisor.service\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" build/osmosisd ~/.osmosisd/cosmovisor/upgrades/v7/bin\nsystemctl start cosmovisor.service\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);