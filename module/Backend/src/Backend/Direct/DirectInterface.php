<?php
namespace Backend\Direct;

interface DirectInterface {
    /**
     * @param string $entity
     * @param int $id
     * @return mixed
     */
    public function read($entity, $id);

    /**
     * @param string $entity
     * @param array $data
     * @return mixed
     */
    public function create($entity, $data);

    /**
     * @param string $entity
     * @param int $id
     * @return mixed
     */
    public function update($entity, $id);

    /**
     * @param string $entity
     * @param int $id
     * @return mixed
     */
    public function destroy($entity, $id);
}