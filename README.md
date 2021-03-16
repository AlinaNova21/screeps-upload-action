# Screeps Upload action

This action uploads code to screeps servers

## Inputs

### `files`
**Required** Files to upload. Default: `dist/*`

### `host`
**Required** Hostname. Default: `screeps.com`

### `port`
**Required** Port. Default: `443`

### `path`
**Required** Path. Default: `/`

### `branch`
**Required** Branch. Default: `default`

### `token`
**Required for MMO** Token

### `username`
**Required for PS** Username

### `password`
**Required for PS** Password


## Outputs

None

## Example usage

```yaml
uses: ags131/screeps-upload-action@v1.0.0
with:
  host: server1.screepspl.us
  port: 443
  branch: ZeSwarm_v1.1
  username: ZeSwarm
  password: password
```